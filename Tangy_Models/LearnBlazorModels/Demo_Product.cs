using System;
namespace Tangy_Models.LearnBlazorModels
{
	public class Demo_Product
	{

		public int ID { get; set; }

		public string Name { get; set; }

		public double Price { get; set; }

		public bool IsActive { get; set; }

		public List<Demo_ProductProp> ProductProperties { get; set; }
	}
}

