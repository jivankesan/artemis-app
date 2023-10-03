# users/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        # Your logic for handling data and saving to the database goes here
        return JsonResponse({"message": "User registered successfully!"})
