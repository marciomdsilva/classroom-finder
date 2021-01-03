import os
from typing import List
from requests import Response, post
from libs.strings import gettext

import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class MailGunException(Exception):
    def __init__(self, message: str):
        super().__init__(message)


class Mailgun:
    MAILGUN_DOMAIN = os.environ.get("MAILGUN_DOMAIN")
    MAILGUN_API_KEY = os.environ.get("MAILGUN_API_KEY")

    FROM_TITLE = "Classroom Finder"
    FROM_EMAIL = f"postmaster@{MAILGUN_DOMAIN}"

    @classmethod
    def send_email(cls, email: List[str], subject: str, text: str, html: str) -> Response:


        return {}, 200


