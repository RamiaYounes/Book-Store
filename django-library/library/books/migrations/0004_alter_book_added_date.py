# Generated by Django 5.0.6 on 2024-06-28 11:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_alter_book_added_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='added_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 6, 28, 14, 50, 38, 732970), verbose_name='date published'),
        ),
    ]
