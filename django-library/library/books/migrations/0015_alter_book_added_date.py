# Generated by Django 5.0.6 on 2024-08-05 17:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0014_alter_book_added_date_alter_book_rate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='added_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 8, 5, 20, 43, 19, 438772), verbose_name='date published'),
        ),
    ]
