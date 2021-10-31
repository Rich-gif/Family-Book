var images = ["https://drive.google.com/file/d/1kcKFwyyQdlJXbBGGwBZNZmqzDo5VmPfK/view?usp=sharing","https://drive.google.com/file/d/1foh2kcN9ciGgetGwwT1WnMuuoNGisMEC/view?usp=sharing","https://drive.google.com/file/d/1DbhTN330FzqZ7OMJTX_FiZwKgVdf1eOh/view?usp=sharing","https://drive.google.com/file/d/1BMU7fRjtlOfyOjkPclmg0gqUkLe2GB9v/view?usp=sharing","https://drive.google.com/file/d/1kXzpfZDCkJaKUIRzmN8catdTLK68i80T/view?usp=sharing","https://drive.google.com/file/d/1CicAL6JxIA-BszXf3zFyzsjYGoi3MgFj/view?usp=sharing"];
var names = ["Family Book","Soma Pradhan", "Tirthankar Mandal", "Nirmala Pradhan", "Kshudiram Pradhan", "Richa Mandal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
