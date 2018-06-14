import json
import os

from django.http import Http404, JsonResponse

from settings import BASE_DIR

data = []

data1_path = os.path.join(BASE_DIR, "ejercicio2/static/data/data1.json")
with open(data1_path) as f:
    data1 = json.loads(f.read())
    data.append(data1)

data2_path = os.path.join(BASE_DIR, "ejercicio2/static/data/data2.json")
with open(data2_path) as f:
    data2 = json.loads(f.read())
    data.append(data2)


data3_path = os.path.join(BASE_DIR, "ejercicio2/static/data/data3.json")
with open(data3_path) as f:
    data3 = json.loads(f.read())
    data.append(data3)


def data_view(request):
    if request.is_ajax():
        return JsonResponse({
            "data": data
        })
    else:
        raise Http404

