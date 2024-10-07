# forms.py
from django import forms
from django.contrib.auth.models import User  # If using Django's built-in User model

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
