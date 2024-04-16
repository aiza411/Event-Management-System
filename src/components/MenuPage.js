import React from 'react';
import '../styles/MenuPage.css';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <img src="/menu.jpg" alt="Header Image" />
      <div className="content">
        <h1>Menu</h1>

        {/* Desi Menu */}
        <div className="menu">
          <h2>Desi Menu</h2>
          <table>
            <thead>
              <tr>
                <th>Menu One</th>
                <th>Menu Two</th>
                <th>Menu Three</th>
                <th>Menu Four</th>
                <th>Menu Five</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mutton Yekhni Pullao</td>
                <td>Chicken Steam Roast</td>
                <td>Pasta Counter 2 Types</td>
                <td>Grilled Fish Lemon Butter Sauce</td>
                <td>Jumbo Fried Prawns</td>
              </tr>
              <tr>
                <td>Singaporean Rice</td>
                <td>Chicken Karahi</td>
                <td>Fried Fish (Sormai)</td>
                <td>Tandoori Chicken</td>
                <td>Dynamite Chicken</td>
              </tr>
              <tr>
                <td>Chicken Biryani Masala Wali Aloo</td>
                <td>Mutton Kunna</td>
                <td>Paratha</td>
                <td>Turkish Kebab (Chicken)</td>
                <td>Garlic Naan</td>
              </tr>
              <tr>
                <td>Mutton Afghani Pullaos</td>
                <td>Chicken Nawabi Qorma</td>
                <td>Chicken Backed Pie with Mashroom</td>
                <td>Fried Fish</td>
                <td>Chicken Strip</td>
              </tr>
              <tr>
                <td>Rs.1870 per person</td>
                <td>Rs.1700 per person</td>
                <td>Rs.1670 per person</td>
                <td>Rs.1900 per person</td>
                <td>Rs.1500 per person</td>
              </tr>
            </tbody>
          </table>
          <div className="ending-line"></div>
        </div>

        {/* Continental Menus */}
        <div className="menu">
          <img src="continental.jpg" alt="Continental Menu Image" />
          <h2>Continental Menus</h2>
          <table>
            <thead>
              <tr>
                <th>Menu One</th>
                <th>Menu Two</th>
                <th>Menu Three</th>
                <th>Menu Four</th>
                <th>Menu Five</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spaghetti Bolognese</td>
                <td>Grilled Salmon</td>
                <td>Beef Tenderloin</td>
                <td>Chicken Piccata</td>
                <td>Margherita Pizza</td>
              </tr>
              <tr>
                <td>Caesar Salad</td>
                <td>Caprese Salad</td>
                <td>Shrimp Scampi</td>
                <td>Greek Salad</td>
                <td>Beef Stroganoff</td>
              </tr>
              <tr>
                <td>Garlic Bread</td>
                <td>Fettuccine Alfredo</td>
                <td>Bruschetta</td>
                <td>Penne alla Vodka</td>
                <td>Tiramisu</td>
              </tr>
              <tr>
                <td>Rs.1970 per person</td>
                <td>Rs.2000 per person</td>
                <td>Rs.1550 per person</td>
                <td>Rs.1900 per person</td>
                <td>Rs.1850 per person</td>
              </tr>
            </tbody>
          </table>
          <div className="ending-line"></div>
        </div>

        {/* Hi Tea Menus */}
        <div className="menu">
          <img src="hi tea.jpg" alt="hi tea Menu Image" />
          <h2>Hi Tea Menus</h2>
          <table>
            <thead>
              <tr>
                <th>Menu One</th>
                <th>Menu Two</th>
                <th>Menu Three</th>
                <th>Menu Four</th>
                <th>Menu Five</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assorted Finger Sandwiches</td>
                <td>Mini Quiches</td>
                <td>Chocolate Eclairs</td>
                <td>Lemon Bars</td>
                <td>Mini Pies</td>
              </tr>
              <tr>
                <td>Scones</td>
                <td>Fruit Tartlets</td>
                <td>Cheese Platter</td>
                <td>Chicken Salad Wraps</td>
                <td>Deviled Eggs</td>
              </tr>
              <tr>
                <td>Clotted Cream</td>
                <td>Cucumber Tea Sandwiches</td>
                <td>Macarons</td>
                <td>Shortbread Cookies</td>
                <td>Tea Selection</td>
              </tr>
              <tr>
                <td>Rs.1000 per person</td>
                <td>Rs.1200 per person</td>
                <td>Rs.1650 per person</td>
                <td>Rs.2110 per person</td>
                <td>Rs.1900 per person</td>
              </tr>
            </tbody>
          </table>
          <div className="ending-line"></div>
        </div>

        {/* Iftar Menus */}
        <div className="menu">
          <img src="iftar.jpg" alt="iftar Menu Image" />
          <h2>Iftar Menus</h2>
          <table>
            <thead>
              <tr>
                <th>Menu One</th>
                <th>Menu Two</th>
                <th>Menu Three</th>
                <th>Menu Four</th>
                <th>Menu Five</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dates</td>
                <td>Samosas</td>
                <td>Fruit Chaat</td>
                <td>Pakoras</td>
                <td>Rooh Afza</td>
              </tr>
              <tr>
                <td>Lentil Soup</td>
                <td>Hummus</td>
                <td>Spinach Fatayer</td>
                <td>Labneh</td>
                <td>Mutton Biryani</td>
              </tr>
              <tr>
                <td>Chicken Biryani</td>
                <td>Lamb Kebabs</td>
                <td>Beef Haleem</td>
                <td>Fish Curry</td>
                <td>Falafel</td>
              </tr>
              <tr>
                <td>Rs.2350 per person</td>
                <td>Rs.2100 per person</td>
                <td>Rs.1900 per person</td>
                <td>Rs.2250 per person</td>
                <td>Rs.1500 per person</td>
              </tr>
            </tbody>
          </table>
          <div className="ending-line"></div>
        </div>

        {/* Breakfast Menus */}
        <div className="menu">
          <img src="breakfast.jpg" alt="Header Image" />
          <h2>Breakfast Menus</h2>
          <table>
            <thead>
              <tr>
                <th>Menu One</th>
                <th>Menu Two</th>
                <th>Menu Three</th>
                <th>Menu Four</th>
                <th>Menu Five</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pancakes</td>
                <td>Avocado Toast</td>
                <td>French Toast</td>
                <td>Waffles</td>
                <td>Eggs Benedict</td>
              </tr>
              <tr>
                <td>Bacon</td>
                <td>Smoothie Bowl</td>
                <td>Omelette</td>
                <td>Breakfast Burrito</td>
                <td>Sausages</td>
              </tr>
              <tr>
                <td>Scrambled Eggs</td>
                <td>Granola Parfait</td>
                <td>Fresh Fruit Salad</td>
                <td>Greek Yogurt with Berries</td>
                <td>Croissants</td>
              </tr>
              <tr>
                <td>Rs.1570 per person</td>
                <td>Rs.1000 per person</td>
                <td>Rs.1670 per person</td>
                <td>Rs.1200 per person</td>
                <td>Rs.2100 per person</td>
              </tr>
            </tbody>
          </table>
          <div className="ending-line"></div>
        </div>
        <div className="additional-info">
          <p>Prices are for 100 people and will increase if ordered for less.</p>
          <p>Mineral Water & Cold Drinks are charged separately.</p>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Dawat. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default MenuPage;
