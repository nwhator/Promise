from django.http import HttpResponse, JsonResponse


def root(_request):
    return JsonResponse(
        {
            "service": "promise-backend",
            "status": "ok",
            "endpoints": ["/api/health/", "/api/blog/", "/admin/"],
        }
    )


def health(_request):
    return JsonResponse({"status": "ok"})


def favicon(_request):
    svg = """
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">
  <rect width=\"64\" height=\"64\" rx=\"12\" fill=\"#111827\" />
  <path d=\"M16 48V16h16.5c8 0 13.5 5.2 13.5 12.4 0 7.1-5.5 12.3-13.5 12.3h-8V48H16zm8.5-14h7.3c3.6 0 6-2.2 6-5.6s-2.4-5.7-6-5.7h-7.3V34z\" fill=\"#ffffff\"/>
</svg>
""".strip()
    return HttpResponse(svg, content_type="image/svg+xml")