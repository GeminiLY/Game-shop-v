# Generated by Django 4.1.5 on 2023-02-28 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameshop', '0014_alter_order_user_id_alter_product_prod_cart_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]