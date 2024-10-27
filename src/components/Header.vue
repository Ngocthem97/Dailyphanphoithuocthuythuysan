<template>
    <header class="header">
    <div class="grid">
      <nav class="header_navbar">
        <!-- <ul class="header__navbar-list">
          <li class="header__navbar-item header__navbar-item--separate">Vào cửa hàng trên ứng dụng</li>
          <li class="header__navbar-item">
            <span class="header__navbar-item-no-pointer">Kết nối</span>
            <a href="https://www.facebook.com/ngocthem.utc" class="header__navbar-icon-link">
              <i class="header__navbar-icon fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/@ngocthemvps2803" class="header__navbar-icon-link">
              <i class="header__navbar-icon fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul> -->
        <!-- Lien he chung toi -->
        <ul class="header__navbar-list">
          <div class="header__navbar-contact">
               <h1 class="header__navbar-contact-text">Liên hệ chúng tôi:</h1>
              <h2 class="header__navbar-contact-number">0962189624</h2>
          </div>
          <!-- <li class="header__navbar-item">
            <a href="" class="header__navbar-item-link">
              Thông báo
              <i class="header__navbar-icon fa-solid fa-bell"></i>
            </a>
          </li>
          <li class="header__navbar-item">
            <a href="" class="header__navbar-item-link">
              Trợ giúp
              <i class="header__navbar-icon fa-regular fa-circle-question"></i>
            </a>
          </li>
          <li class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng ký tư vấn sản phẩm</li>
          <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li> -->
        </ul>
      </nav>
      
      <div class="header-with-search">
        <div class="header__logo">
          <img src="../assets/img/logo.png" alt="Logo" width="60" height="55">
        </div>

        <div class="intro">
          <h1 class="Ten_dai_ly">ĐẠI LÝ PHÂN PHỐI THUỐC THỦY SẢN</h1>
          <h2 class="slogan">Chuyên gia hàng đầu thuốc thủy sản tại Việt Nam</h2>
        </div>

        <div class="header__search">
          <input type="text" class="header__search-input" placeholder="Tìm sản phẩm bạn quan tâm...">
        </div>
        
        <div class="header__cart">
          <i class="header__cart-icon fa-sharp fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <ul class="header__menu">
        <li class="header__menu-funtion">
           <router-link to="/spbanchay" class="header__menu-funtion-spbanchay">
               Sản phẩm bán chạy
           </router-link>
        </li>
         <li class="header__menu-funtion">
             <router-link to="/dieutritom" class="header__menu-funtion-dieutritom">
                Điều trị tôm
             </router-link>
         </li>
         <li class="header__menu-funtion">
              <router-link to="/dieutrica" class="header__menu-funtion-dieutrica">
               Điều trị cá
             </router-link>
         </li>
         <li class="header__menu-funtion">
              <router-link to="/knnuoitrong" class="header__menu-funtion-knnuoitrong">
               Kinh nghiệm nuôi trồng
             </router-link>
         </li>
         <li class="header__menu-funtion">
              <router-link to="/vechungtoi" class="header__menu-vechungtoi">
               Về chúng tôi
             </router-link>
         </li>
         <!--thong tin sdt tren menu-->
        <!-- <div class="header__menu-contact-icon"> -->
          <i class="fa-regular fa-phone"></i>
        <!--</div> -->
         <h1 class="header__menu-contact-sdt">0962189624</h1>
      </ul>
    </div>
  </header>
  </template>
  
  <script setup>
  // Additional component-specific JavaScript if needed
  </script>
  
  <style scoped>
  /* Place the header CSS styles here or import the related styles */
  </style>
  