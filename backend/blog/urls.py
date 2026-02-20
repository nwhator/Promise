from django.urls import path

from .views import blog_post_detail, blog_posts

urlpatterns = [
    path("", blog_posts, name="blog_posts"),
    path("<slug:slug>/", blog_post_detail, name="blog_post_detail"),
]