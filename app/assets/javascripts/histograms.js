function cal()
{

  var grades = group;

  var count_ap = 0;
  var count_a = 0;
  var count_am = 0;
  var count_bp = 0;
  var count_b = 0;
  var count_bm = 0;
  var count_cp = 0;
  var count_c = 0;
  var count_cm = 0;
  var count_d = 0;
  var count_f = 0;

  var max = document.getElementById("max_bound").value;
  var ap = document.getElementById("a+_bound").value;
  var a = document.getElementById("a_bound").value;
  var am = document.getElementById("a-_bound").value;
  var bp = document.getElementById("b+_bound").value;
  var b = document.getElementById("b_bound").value;
  var bm = document.getElementById("b-_bound").value;
  var cp = document.getElementById("c+_bound").value;
  var c = document.getElementById("c_bound").value;
  var cm = document.getElementById("c-_bound").value;
  var d = document.getElementById("d_bound").value;
  var f = document.getElementById("f_bound").value;

  if (isNaN(max) || isNaN(ap) || isNaN(a) || isNaN(am) || isNaN(bp) || isNaN(b) || isNaN(bm) || isNaN(cp) || isNaN(c) || isNaN(cm) || isNaN(d) || isNaN(f))
  {
    alert("Can not enter letters !!");
    return;
  }

  for (i = 0; i < grades.length; i++)
  {
    if (grades[i] >= ap && grades[i] < max)
      count_ap++;
    if (grades[i] >= a && grades[i] < ap)
      count_a++;
    if (grades[i] >= am && grades[i] < a)
      count_am++;
    if (grades[i] >= bp && grades[i] < am)
      count_bp++;
    if (grades[i] >= b && grades[i] < bp)
      count_b++;
    if (grades[i] >= bm && grades[i] < b)
      count_bm++;
    if (grades[i] >= cp && grades[i] < bm)
      count_cp++;
    if (grades[i] >= c && grades[i] < cp)
      count_c++;
    if (grades[i] >= cm && grades[i] < c)
      count_cm++;
    if (grades[i] >= d && grades[i] < cm)
      count_d++;
    if (grades[i] >= f && grades[i] < d)
      count_f++;
  }

  var count_total = count_ap + count_a + count_am + count_bp + count_b + count_bm + count_cp + count_c + count_cm + count_d + count_f;
  if ( count_total != grades.length)
  {
    alert("Invalid input !!");
    return;
  }
  else
    alert("Successfully generated histograms")



  var unit_ap = '[';
  var unit_a = '[';
  var unit_am = '[';
  var unit_bp = '[';
  var unit_b = '[';
  var unit_bm = '[';
  var unit_cp = '[';
  var unit_c = '[';
  var unit_cm = '[';
  var unit_d = '[';
  var unit_f = '[';

  for(i=0; i<count_ap; i++)
    unit_ap += '@';
  for(i=0; i<count_a; i++)
    unit_a += '@';
  for(i=0; i<count_am; i++)
    unit_am += '@';
  for(i=0; i<count_bp; i++)
    unit_bp += '@';
  for(i=0; i<count_b; i++)
    unit_b += '@';
  for(i=0; i<count_bm; i++)
    unit_bm += '@';
  for(i=0; i<count_cp; i++)
    unit_cp += '@';
  for(i=0; i<count_c; i++)
    unit_c += '@';
  for(i=0; i<count_cm; i++)
    unit_cm += '@';
  for(i=0; i<count_d; i++)
    unit_d += '@';
  for(i=0; i<count_f; i++)
    unit_f += '@';

  document.getElementById("a+_count").innerHTML = unit_ap;
  document.getElementById("a_count").innerHTML = unit_a;
  document.getElementById("a-_count").innerHTML = unit_am;
  document.getElementById("b+_count").innerHTML = unit_bp;
  document.getElementById("b_count").innerHTML = unit_b;
  document.getElementById("b-_count").innerHTML = unit_bm;
  document.getElementById("c+_count").innerHTML = unit_cp;
  document.getElementById("c_count").innerHTML = unit_c;
  document.getElementById("c-_count").innerHTML = unit_cm;
  document.getElementById("d_count").innerHTML = unit_d;
  document.getElementById("f_count").innerHTML = unit_f;

}
