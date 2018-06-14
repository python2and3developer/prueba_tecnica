from django.conf.urls import url
from django.views.generic.base import RedirectView, TemplateView

from views import data_view


urlpatterns = [
    url(r'^data$', data_view),
    url(r'^$', TemplateView.as_view(template_name="index.html"),
        name="homepage"),
    url(r'^index.html$', RedirectView.as_view(pattern_name='homepage',
        permanent=False)),
    url(r'^about.html$', TemplateView.as_view(template_name="about.html"),
        name="about")
]
