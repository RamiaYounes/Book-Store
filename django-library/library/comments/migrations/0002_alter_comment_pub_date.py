# Generated by Django 5.0.6 on 2024-07-06 22:23

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='pub_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 7, 7, 1, 23, 37, 435407), verbose_name='date published'),
        ),
    ]