# authentication/test_smtp.py
import os
import sys
import django

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.core.mail import send_mail
from django.conf import settings
from decouple import config

def test_django_email():
    """Test Django email system"""
    
    MY_MAIL = config('MY_MAIL')
    
    print(f"Testing Django email to {MY_MAIL}...")
    print(f"SMTP: {settings.EMAIL_HOST}:{settings.EMAIL_PORT}")
    print(f"From: {settings.DEFAULT_FROM_EMAIL}\n")
    
    try:
        send_mail(
            subject='AI-Augmented Django Email Test',
            message='This is a test email from AI-Augmented platform using Django mail system.\n\nIf you received this, your email configuration is working correctly!',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[MY_MAIL],
            fail_silently=False,
        )
        
        print("✅ Email sent successfully via Django!")
        print(f"✅ Check inbox: {MY_MAIL}")
        return True
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

if __name__ == "__main__":
    test_django_email()