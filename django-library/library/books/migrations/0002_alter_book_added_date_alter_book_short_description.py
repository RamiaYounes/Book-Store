# Generated by Django 5.0.6 on 2024-06-27 19:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='added_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 6, 27, 22, 53, 6, 300501), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='book',
            name='short_description',
            field=models.CharField(max_length=500),
        ),
    ]
