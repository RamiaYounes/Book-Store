# Generated by Django 5.0.6 on 2024-08-11 20:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0010_alter_comment_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='pub_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 8, 11, 23, 16, 21, 40240), verbose_name='date published'),
        ),
    ]
