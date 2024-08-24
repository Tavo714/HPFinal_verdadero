using System.ComponentModel.DataAnnotations;

namespace PrjFinalHerramientas.Models
{
    public class BuscarLibros
    {
        [Key]
        public int LibroId { get; set; }
        public string Titulo { get; set; } = "";
        public int AñoPublicacion { get; set; }
        public string Autor { get; set; } = "";
        public int Stock { get; set; }
        public string Estado { get; set; } = "";
    }
}
