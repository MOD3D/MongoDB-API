using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using MonolegalMVC.Models;

namespace MonolegalMVC.Services
{
    public class MongoDBService
    {
        private IMongoCollection<Cliente> _Cliente;

        public MongoDBService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.Server);
            var database = client.GetDatabase(settings.Database);
            _Cliente = database.GetCollection<Cliente>(settings.Collection);
        }

        public List<Cliente> Get()
        {
            return _Cliente.Find(d => true).ToList();
        }

        public Cliente Create(Cliente cliente)
        {
            _Cliente.InsertOne(cliente);
            return cliente;
        }
    }
}
