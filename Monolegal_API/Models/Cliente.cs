using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace MonolegalMVC.Models
{
    public class Cliente
    {
        private string id;
        private string nombre;
        private string tp_doc;
        private string doc;
        private string telefono;
        private string direccion;
        private string ciudad;
        private string email;
        private string fecha_reg;

        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ID { get { return id; } set { id = value; } }
        [BsonElement("NOMBRE")]
        public string Nombre { get { return nombre; } set { nombre = value; } }
        [BsonElement("TP_DOCUMENTO")]
        public string Tp_Documento { get { return tp_doc; } set { tp_doc = value; } }
        [BsonElement("DOCUMENTO")]
        public string Documento { get { return doc; } set { doc = value; } }
        [BsonElement("TELEFONO")]
        public string Telefono { get { return telefono; } set { telefono = value; } }
        [BsonElement("DIRECCION")]
        public string Direccion { get { return direccion; } set { direccion = value; } }
        [BsonElement("CIUDAD")]
        public string Ciudad { get { return ciudad; } set { ciudad = value; } }
        [BsonElement("EMAIL")]
        public string Email { get { return email; } set { email = value; } }
        [BsonElement("FECHA_REGISTRO")]
        public string Fecha_Registro { get { return fecha_reg; } set { fecha_reg = value; } }

    }
}
