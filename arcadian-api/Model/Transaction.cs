using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ArcadianApi.Model
{
    [Table("Transaction")]
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; }
        public string TransactionName { get; set; }
        public DateTime Date { get; set; }
        public double Cost { get; set; }
    }
}
