# Generated by Django 5.0.6 on 2024-07-19 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usermessages', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usersmessages',
            name='user',
        ),
        migrations.AddField(
            model_name='usersmessages',
            name='email',
            field=models.EmailField(default='', max_length=50),
        ),
    ]