using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ArcadianApi.Model
{
    public class TransactionFormParam
    {
        public string TransactionId { get; set; }
        public string TransactionName { get; set; }
        public string Date { get; set; }
        public string Cost { get; set; }
    }
}
