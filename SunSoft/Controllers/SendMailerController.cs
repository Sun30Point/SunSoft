﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SunSoft.Models;
using System.Net.Mail;

namespace SunSoft.Controllers
{
    public class SendMailerController : Controller
    {
        // GET: SendMailer
        public ActionResult EmailIndex()
        {
            return View();
        }
        public ActionResult SuccessSend()
        {
            return View();
        }
        [HttpPost]
        public ViewResult EmailIndex(MailModel _objModelMail)
        {
            if (ModelState.IsValid)
            {
                MailMessage mail = new MailMessage();
                mail.To.Add("sun30point@gmail.com");
                mail.From = new MailAddress(_objModelMail.Email);
                mail.Subject ="Subscription for " + _objModelMail.Email/*_objModelMail.Subject + " From " + _objModelMail.Name + "(" + _objModelMail.Email + ")"*/;
                string Body = "Subscription for " + _objModelMail.Email/* _objModelMail.Message*/;
                mail.Body = Body;
                mail.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new System.Net.NetworkCredential("LtopMessage@gmail.com", "LtopSunPoint2017"); // Enter seders User name and password  
                smtp.EnableSsl = true;
                smtp.Send(mail);
                return View("~/Views/Home/Index.cshtml");
            }
            else
            {
                return View("~/Views/Home/Index.cshtml");
            }
        }
    }
}