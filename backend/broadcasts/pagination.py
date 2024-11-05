from rest_framework.pagination import PageNumberPagination

class CustomPageNumberPagination(PageNumberPagination):
    page_size = 30
    page_size_query_parameter = 'page_size'
    max_page_size = 100