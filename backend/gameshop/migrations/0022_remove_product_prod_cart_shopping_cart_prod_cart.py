# Generated by Django 4.1.5 on 2023-03-16 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameshop', '0021_remove_product_shopping_cart_product_prod_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='prod_cart',
        ),
        migrations.AddField(
            model_name='shopping_cart',
            name='prod_cart',
            field=models.ManyToManyField(null=True, to='gameshop.product'),
        ),
    ]
