# Generated by Django 5.0.6 on 2024-08-05 17:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0006_alter_comment_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='pub_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 8, 5, 20, 43, 19, 481283), verbose_name='date published'),
        ),
    ]