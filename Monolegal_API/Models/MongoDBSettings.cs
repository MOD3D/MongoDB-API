using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonolegalMVC.Models
{
    public class MongoDBSettings : IMongoDBSettings
    {
        private string server;
        private string database;
        private string collection;

        public string Server { get { return server; } set { server = value; } }
        public string Database { get { return database; } set { database = value; } }
        public string Collection { get { return collection; } set { collection = value; } }
    }

    public interface IMongoDBSettings
    {
        public string Server { get; set;  }
        public string Database { get; set; }
        public string Collection { get; set; }
    }

}
