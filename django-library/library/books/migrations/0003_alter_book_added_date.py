# Generated by Django 5.0.6 on 2024-06-28 11:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_alter_book_added_date_alter_book_short_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='added_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 6, 28, 14, 5, 37, 641332), verbose_name='date published'),
        ),
    ]