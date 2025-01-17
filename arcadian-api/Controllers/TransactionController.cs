﻿using ArcadianApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArcadianApi.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        readonly ArcadianDbContext ArcadianDbContext;
        private readonly ILogger<TransactionController> _logger;

        public TransactionController(ArcadianDbContext arcadianDbContext, ILogger<TransactionController> logger)
        {
            ArcadianDbContext = arcadianDbContext;
            _logger = logger;
        }

        [HttpGet("get")]
        public IEnumerable<Transaction> Get()
        {
            var data = ArcadianDbContext.Transactions.ToList();
            return data;
        }

        [HttpGet("getbyid")]
        public Transaction GetById(int id)
        {
            var data = ArcadianDbContext.Transactions.SingleOrDefault(t=>t.TransactionId == id);
            return data;
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody] TransactionFormParam obj)
        {
            try
            {
                var trx = new Transaction
                {
                    TransactionName = obj.TransactionName,
                    Date = Convert.ToDateTime(obj.Date),
                    Cost = Convert.ToDouble(obj.Cost)
                };
                ArcadianDbContext.Transactions.Add(trx);
                ArcadianDbContext.SaveChanges();
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
