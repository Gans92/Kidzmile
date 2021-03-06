﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.ExceptionHandling;
using System.Diagnostics;
using Kidzmile.Exception_Handler;
using Kidzmile.Consistent_Handler;
using System.Web.Http;
namespace Kidzmile
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //to make web API consistent

            config.MessageHandlers.Add(new WrappingHandler());
            //catch and add exceptions to the logger
            // config.Services.Replace(typeof(IExceptionHandler),new GlobalExceptionHandler());

            config.EnableCors();
        }
    }
}
