
  
  function showAddressPage() {
    window.location.href = "/address";
  }
  
  
  async function deleteItem(prodId) {
  
    
    const response = await fetch("/cart/userid/d",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const userd = await response.json();
    console.log(userd.userid)
    const userId =userd.userid;
  
    const result = await fetch("/bag/deleteItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        prodId,
      }),
    }).then((res) => res.json());
    alert("Item Removed");
    window.location.reload()
  
  }