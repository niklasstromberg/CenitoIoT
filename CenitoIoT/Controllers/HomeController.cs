using CenitoIoT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Mvc;

namespace CenitoIoT.Controllers
{
    public class HomeController : Controller 
    {
        public ActionResult Index()
        {
            ViewBag.Title = "CenitoIoT";

            return View();
        }
    }
}
