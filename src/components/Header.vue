<template>
    <header class="header">
    <div class="grid">
      <nav class="header_navbar">
        <ul class="header__navbar-list">
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
        </ul>
        
        <ul class="header__navbar-list">
          <li class="header__navbar-item">
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
          <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li>
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

    </div>
    <li class="header__navbar-item">
        <router-link to="/" class="header__navbar-item-link">
            Home
        </router-link>
    </li>
    <li class="header__navbar-item">
        <router-link to="/products" class="header__navbar-item-link">
            Sản phẩm
        </router-link>
    </li>
    <li class="header__navbar-item">
        <router-link to="/about" class="header__navbar-item-link">
            About
        </router-link>
    </li>
  </header>
  </template>
  
  <script setup>
  // Additional component-specific JavaScript if needed
  </script>
  
  <style scoped>
  /* Place the header CSS styles here or import the related styles */
  </style>
  