from django.http import Http404, JsonResponse
from django.db.models import Q
from django.utils import timezone

from .models import BlogPost


def _serialize_post(post: BlogPost, request):
    image_url = request.build_absolute_uri(post.cover_image.url) if post.cover_image else None
    return {
        "id": post.id,
        "title": post.title,
        "slug": post.slug,
        "excerpt": post.excerpt,
        "content": post.content,
        "cover_image": image_url,
        "is_published": post.is_published,
        "published_at": post.published_at.isoformat() if post.published_at else None,
        "created_at": post.created_at.isoformat(),
        "updated_at": post.updated_at.isoformat(),
    }


def blog_posts(request):
    posts = BlogPost.objects.filter(is_published=True).filter(
        Q(published_at__isnull=True) | Q(published_at__lte=timezone.now())
    )
    payload = [_serialize_post(post, request) for post in posts.order_by("-published_at", "-created_at")]
    return JsonResponse({"results": payload})


def blog_post_detail(request, slug: str):
    try:
        post = BlogPost.objects.get(slug=slug, is_published=True)
    except BlogPost.DoesNotExist as exc:
        raise Http404("Blog post not found") from exc

    if post.published_at and post.published_at > timezone.now():
        raise Http404("Blog post not found")

    return JsonResponse(_serialize_post(post, request))