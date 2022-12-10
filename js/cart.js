jQuery(document).ready(function ($) {
  "use strict";

  $(".submit-btn").on("click", function () {
    swal({
      title: "確認送出訂單嗎?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      // icon: "info",
      buttons: true,
      // dangerMode: true,
    }).then((willDelete) => {
      console.log("willDelete = ", willDelete);
      if (willDelete) {
        setTimeout(() => {
          console.log("setTimeout");
          window.location = "thankyou.html";
        }, 1 * 1000);

        swal("送出成功", {
          icon: "success",
        }).then((willDelete2) => {
          console.log("willDelete2 = ", willDelete2);

          if (willDelete) {
            // swal("表單已成功送出", {
            //   icon: "success",
            // });
            window.location = "thankyou.html";
          } else {
            // swal("Your imaginary file is safe!");
          }
        });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  });

  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      itemPriceCount($this, "minus");
      totalItemPriceCount();
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();

      var $this = $(this);
      itemPriceCount($this, "plus");
      totalItemPriceCount();

      // var itemNumber =
      //   parseInt($(this).closest(".input-group").find(".form-control").val()) +
      //   1;
      // var itemPrice = parseInt(
      //   $(this).closest("td").prev().text().trim().replace("$", "")
      // );

      // console.log("itemNumber = ", itemNumber);
      // console.log("itemPrice = ", itemPrice);

      // 計算數量
      // $(this).closest(".input-group").find(".form-control").val(itemNumber);

      // 單品金額總計
      // $(this)
      //   .closest("td")
      //   .next()
      //   .text("$" + itemNumber * itemPrice);
    });
  };
  sitePlusMinus();

  function itemPriceCount(pItem, type) {
    var itemNumber = parseInt(
      pItem.closest(".input-group").find(".form-control").val()
    );
    var itemPrice = parseInt(
      pItem.closest("td").prev().text().trim().replace("$", "")
    );

    // console.log("itemNumber = ", itemNumber);
    // console.log("itemPrice = ", itemPrice);

    // 計算數量
    if (type == "minus") {
      itemNumber--;

      if (pItem.closest(".input-group").find(".form-control").val() == 0) {
        pItem.closest(".input-group").find(".form-control").val(parseInt(0));
        itemNumber = 0;
      }
    } else if (type == "plus") {
      itemNumber++;
    }

    // 計算數量
    pItem.closest(".input-group").find(".form-control").val(itemNumber);

    // 單品金額總計
    pItem
      .closest("td")
      .next()
      .text("$" + itemNumber * itemPrice);
  }

  function totalItemPriceCount(params) {
    var totalPrice = 0;
    $("tbody tr").each(function (idx, ele) {
      var $this = $(ele);
      var itemPrice = parseInt(
        $this.find("td:last").text().trim().replace("$", "")
      );
      totalPrice += itemPrice;
      // console.log(itemPrice);
    });

    $(".total-price").text("$" + totalPrice);
  }
});
