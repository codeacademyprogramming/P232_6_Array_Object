using System;

namespace _06122022
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var m = 124;
            var n = 1;
            var count = 0;

            //while (n<m)
            //{
            //    if (n % 15 == 0)
            //    {
            //        count++;
            //    }
            //    n++;
            //}


            for(var i = 1; i < m; i++)
            {
                if (i % 15 == 0)
                {
                    count++;
                }
            }



            Console.WriteLine(count);



            byte[] points;

            points = new byte[5];
            points = new byte[] { 10, 45, 65, 23, 44 };
            points = new byte[5] { 10, 55, 34, 10,44 };

            points[0] = 100;

            var firstPoint = points[0];


            Console.WriteLine("indexes (for):");
            for(int i = 0; i < points.Length; i++)
            {
                points[i]++;
                Console.WriteLine(points[i]);
            }


            Console.WriteLine("indexes (white):");
            int j = 0;
            while (j < points.Length)
            {
                Console.WriteLine(points[j]);

                j++;
            }

            string[] names = new string[] { "Hikmet", "Abdulla", "Nermin","Tofiq","Nazli" };


            Console.WriteLine("Adlar:");
            for(int i = 0; i < names.Length; i++)
            {
                if (names[i] == "Tofiq")
                {
                    continue;
                    //break;
                }
                Console.WriteLine(names[i]);
            }



        }
    }
}
