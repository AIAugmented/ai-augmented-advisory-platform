# authentication/serializers.py

from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.validators import EmailValidator
import re

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration
    Validates email format and password strength
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    password_confirm = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    
    class Meta:
        model = User
        fields = (
            'email',
            'password',
            'password_confirm',
            'first_name',
            'last_name',
            'company',
            'role',
        )
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
            'company': {'required': False},
            'role': {'required': False},
        }

    def validate_email(self, value):
        """
        Validate email format using RFC 5322 regex
        """
        email_validator = EmailValidator()
        email_validator(value)
        
        # Normalize email
        value = value.lower().strip()
        
        return value

    def validate(self, attrs):
        """
        Validate that passwords match
        """
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({
                'password_confirm': 'Passwords do not match'
            })
        
        attrs.pop('password_confirm')
        
        return attrs


class LoginSerializer(serializers.Serializer):
    """
    Serializer for user login
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )

    def validate_email(self, value):
        """Normalize email"""
        return value.lower().strip()


class VerifyEmailSerializer(serializers.Serializer):
    """
    Serializer for email verification
    """
    token = serializers.CharField(required=True)


class GoogleAuthSerializer(serializers.Serializer):
    """
    Serializer for Google OAuth authentication
    """
    id_token = serializers.CharField(required=True)


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for user data
    Returns user information without sensitive data
    """
    full_name = serializers.CharField(source='get_full_name', read_only=True)
    short_name = serializers.CharField(source='get_short_name', read_only=True)
    
    class Meta:
        model = User
        fields = ( 'id', 'email', 'first_name', 'last_name', 'full_name', 'short_name', 'company', 'role', 'subscription_tier', 'is_active', 'email_verified', 'auth_provider', 'workspace_limit', 'created_at', 'last_login',)
        read_only_fields = (
            'id',
            'subscription_tier',
            'is_active',
            'email_verified',
            'auth_provider',
            'workspace_limit',
            'created_at',
            'last_login',
        )


class UserUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for updating user profile
    """
    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'company',
            'role',
        )

    def validate_first_name(self, value):
        """Remove extra whitespace"""
        return value.strip() if value else value

    def validate_last_name(self, value):
        """Remove extra whitespace"""
        return value.strip() if value else value