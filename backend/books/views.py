from rest_framework.decorators import api_view
from rest_framework.response import Response

# Sample data
BOOKS = [
    {"id": 1, "title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams"},
    {"id": 2, "title": "Pride and Prejudice", "author": "Jane Austen"},
    {"id": 3, "title": "1984", "author": "George Orwell"},
    {"id": 4, "title": "To Kill a Mockingbird", "author": "Harper Lee"},
    {"id": 5, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"id": 6, "title": "Moby Dick", "author": "Herman Melville"},
    {"id": 7, "title": "War and Peace", "author": "Leo Tolstoy"},
    {"id": 8, "title": "The Catcher in the Rye", "author": "J.D. Salinger"},
    {"id": 9, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien"},
    {"id": 10, "title": "Brave New World", "author": "Aldous Huxley"},
    {"id": 11, "title": "Jane Eyre", "author": "Charlotte Brontë"},
    {"id": 12, "title": "Crime and Punishment", "author": "Fyodor Dostoevsky"}
]

@api_view(['GET'])
def get_books(request):
    return Response(BOOKS)

@api_view(['POST'])
def place_order(request):
    book_id = request.data.get('book_id')
    customer_name = request.data.get('customer_name')
    order_details = {
        "message": "Order placed successfully!",
        "book_id": book_id,
        "customer_name": customer_name
    }
    return Response(order_details)
