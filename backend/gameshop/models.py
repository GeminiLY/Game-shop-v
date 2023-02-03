from django.db import models
from django.db.models import Deferrable, UniqueConstraint
import datetime
from django.db import models

# Create your models here.
class Games(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True ,)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Administrators(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=500)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Categories(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True ,)
    creator_admin_id = models.ForeignKey('Administrators', on_delete=models.CASCADE)
    deleted_by_admin_id = models.ForeignKey('Administrators', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Prod_category(models.Model):
    prod_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    car_id = models.ForeignKey('Categories', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True ,)
    stock = models.IntegerField(null=True)
    review_id= models.ForeignKey('Review', on_delete=models.CASCADE)
    discout_id = models.ForeignKey('Discount', on_delete=models.CASCADE)
    creator_admin_id = models.IntegerField(null=True)
    is_deleted= models.BooleanField(default=False)
    deleted_by_admin_id = models.IntegerField(null=True)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Discount(models.Model):
    id = models.AutoField(primary_key=True)
    start_date = models.DateField(default=datetime.date.today)
    end_date  = models.TextField(blank=True ,)
    title = models.IntegerField(null=True)
    discount_type= models.IntegerField(null=True)
    rate = models.IntegerField(null=True)
    code = models.IntegerField(null=True)
    admin_id= models.ForeignKey('Administrators', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Review(models.Model):
    id = models.AutoField(primary_key=True)
    rating = models.IntegerField(null=True)
    feedback = models.TextField(blank=True)
    prod_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    hidden = models.BooleanField(default=False)
    reported = models.BooleanField(default=False)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    e_mail = models.CharField(max_length=300)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
class Shopping_cart(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
class Prod_cart(models.Model):
    cart_id = models.ForeignKey('Shopping_cart', on_delete=models.CASCADE)
    prod_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    payment_way = models.CharField(max_length=500)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    discount_code = models.CharField(max_length=8)
    state = models.BooleanField(default=False)
    discount_id = models.ForeignKey('Discount', on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
class Adress(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.IntegerField(null=True)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    post_number = models.IntegerField(null=True)
    street_name = models.CharField(max_length=100)
    co_adress = models.CharField(max_length=100)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

# Create your models here.
