using System.ComponentModel.DataAnnotations;

namespace PrjClienteFinalHerramientas.Models
{
    public class BuscarLibros
    {
        [Display(Name = "Identificador: ")]
        public int LibroId { get; set; }
        
        public string Titulo { get; set; } = "";
        //
        [Display(Name = "Año de Publicacion: ")]
        public int AñoPublicacion { get; set; }
        public string Autor { get; set; } = "";
        public int Stock { get; set; }
        public string Estado { get; set; } = "";
    }
}
