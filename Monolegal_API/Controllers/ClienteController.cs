using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MonolegalMVC.Services;
using MonolegalMVC.Models;

namespace MonolegalMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : Controller
    {
        
        public MongoDBService _MongoDBService;

        public ClienteController(MongoDBService mongoService) 
        {
            _MongoDBService = mongoService;
        }

        [HttpGet]
        public ActionResult<List<Cliente>> Get()
        {
            return _MongoDBService.Get();
        }

        [HttpPost, DisableRequestSizeLimit]
        public ActionResult<List<Cliente>> Create(Cliente cliente)
        {
            _MongoDBService.Create(cliente);
            return Ok(cliente);
        }

    }
}


