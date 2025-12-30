
        // ..................sign up register form script start............
        $(document).ready(function () {

                        // Navbar button click → show form
            $(".btn-signup, #open-signup-btn").click(function (e) {
                e.preventDefault();
                $("#sign-up").closest(".register-form-section").fadeIn(300);
            });

            // Close button
            $(".close-btn").click(function () {
                $(this).closest(".register-form-section").fadeOut(300);
            });

            // Open Login
            $("#open-sign-in").click(function (e) {
                e.preventDefault();
                $("#sign-up").fadeOut(300, function () {
                    $("#sign-in").removeClass("d-none").fadeIn(300);
                });
            });

            // Open Sign Up from Sign In
            $("#open-sign-up").click(function (e) {
                e.preventDefault();
                $("#sign-in").fadeOut(300, function () {
                    $("#sign-up").removeClass("d-none").fadeIn(300);
                });
            });

            // Simple Sign Up Validation
            $("#register-btn").click(function () {
                let name = $("#signup-name").val();
                let email = $("#signup-email").val();
                let pass = $("#signup-pass").val();
                let cpass = $("#signup-cpass").val();

                if (name === "" || email === "" || pass === "" || cpass === "") {
                    alert("All fields are required!");
                    return;
                }
                if (pass !== cpass) {
                    alert("Passwords do not match!");
                    return;
                }

                alert("Registration Successful!");
                $("#signup-name, #signup-email, #signup-pass, #signup-cpass").val('');
                $("#sign-up").closest(".register-form-section").fadeOut(300);
            });
        });

        // ..................sign up register form script end............

const products = {
    f1: {
        name: "Cielia",
        para: "Ceilia is a smooth, high-quality interior paint that blends perfectly on walls. It provides a long-lasting, matte finish and is fade-resistant. Ideal for giving any room an elegant look.",
        featured: ["Anti-dust technology.",
            "Smooth matte finish.",
            "Low VOC formula .",
            "Quick touch-up friendly."],
        price: "4,000.00",
        img: "images/Cielia.png"
    },
    f2: {
        name: "Ferra Coat",
        para: "Ceilia is a smooth, high-quality interior paint that blends perfectly on walls. It provides a long-lasting, matte finish and is fade-resistant. Ideal for giving any room an elegant look.",
        featured: ["Microfiber reinforcement.",
            "Scratch-resistant surface.",
            "Anti-bacterial coating .",
            "Easy color retention."],
        price: "5,000.00",
        img: "images/Ferra Coat.png"
    },
    f3: {
        name: "Primary Volx",
        para: "Primary Volx comes in bright, bold colors that make interiors lively and modern. It provides smooth, even coverage and is odor-free. Great for homes, offices, and schools.",
        featured: ["High pigment density.",
            "Seamless wall coverage.",
            "Fast leveling .",
            "Odor-neutral formula."],
        price: "5,000.00",
        img: "images/Primary Volx.png"
    },
    f4: {
        name: "Sky vera coat",
        para: "Sky Vera Coat is versatile and works for both interiors and exteriors. It has a sleek, washable finish that keeps colors vibrant. A reliable and stylish paint option.",
        featured: ["Thermal insulation layer.",
            "Soft-touch feel.",
            "Eco-friendly ingredients .",
            "Long-lasting shine."],
        price: "3,500.00",
        img: "images/Sky vera coat.png"
    },
    1: {
        name: "Anti Corrosion",
        para: "Anti Corrosion provides advanced protection against internal wall damage.It shields surfaces from moisture, chemical impact, and long-term wear.Designed for durability with a clean, smooth interior finish.",
        featured: ["Long-lasting protection.",
            "Smooth interior finish.",
            "Moisture resistance .",
            "Easy maintenance ."],
        price: "20,000.00",
        img: "images/Anti Corrosion.png"
    },
    2: {
        name: "Hydro Shield Range",
        para: "Hydro Shield Range delivers superior resistance against damp and water penetration.It strengthens walls by preventing cracks and surface weakening.A high-performance solution for long-lasting interior protection.",
        featured: ["Water repellent.",
            "Damp wall protection.",
            "Crack resistance .",
            "Durable coating."],
        price: "22,000.00",
        img: "images/Hydro Shield.webp"
    },
    3: {
        name: "Aqua Primary",
        para: "Aqua Primary creates a strong, reliable foundation for interior coatings.It ensures uniform surface preparation for flawless paint application.Engineered for fast drying and improved finish quality.",
        featured: ["Strong base adhesion.",
            "Uniform surface prep.",
            "Low odor formula .",
            "Quick drying."],
        price: "25,000.00",
        img: "images/Aqua Primary.png"
    },
    4: {
        name: "Base Prime System",
        para: "Base Prime System enhances surface bonding for extended paint life.It improves topcoat smoothness and overall paint performance.Ideal for achieving professional-grade interior results.",
        featured: ["Deep surface bonding.",
            "Improves paint life.",
            "Smooth top coat support.",
            "High coverage."],
        price: "18,000.00",
        img: "images/Base Prime System.png"
    },
    11: {
        name: "Silk Smooth Coating",
        para: "Silk Smooth Coating delivers a refined, elegant exterior appearance.Its advanced formula resists harsh weather and surface fading.Provides long-term durability with a silky smooth texture.",
        featured: ["Weather resistant.",
            "Silky smooth texture.",
            "Fade resistance .",
            "Long durability."],
        price: "19,000.00",
        img: "images/Silk Smooth Coating.png"
    },
    12: {
        name: "Pearl Sheen",
        para: "Pearl Sheen offers a premium glossy finish with superior surface protection.It resists UV rays, stains, and environmental damage.Designed for easy cleaning and long-lasting brilliance.",
        featured: ["Premium glossy look.",
            "UV protection.",
            "Easy washability .",
            "Stain resistance."],
        price: "18,000.00",
        img: "images/Pearl Sheen.png"
    },
    13: {
        name: "Metal Shield Pro",
        para: "",
        featured: ["Heat resistance.",
            "Sunlight protection.",
            "Color stability .",
            "Exterior durability."],
        price: "20,000.00",
        img: "images/Metal Shield Pro.png"
    },
    14: {
        name: "Matte Sealer",
        para: "Matte Sealer delivers a modern, non-reflective exterior finish.It effectively seals cracks and strengthens wall surfaces.Provides extended protection with a durable sealing layer.",
        featured: ["Non-reflective finish.",
            "Crack control.",
            "Strong sealing .",
            "Long protection."],
        price: "15,000.00",
        img: "images/Matte Sealer.png"
    },
    21: {
        name: "Iron Max Finishes",
        para: "Iron Max Finishes combine heavy-duty strength with a luxury metal look.They protect surfaces from rust, corrosion, and mechanical stress.Engineered for high durability with premium aesthetics.",
        featured: ["Heavy duty strength.",
            "Luxury metal finish.",
            "Rust protection .",
            "High durability."],
        price: "18,000.00",
        img: "images/Iron Max Finishes.png"
    },
    22: {
        name: "Premium Satin",
        para: "Premium Satin offers a soft, sophisticated satin sheen.Its smooth texture enhances interior elegance and comfort.Designed for easy maintenance and refined living spaces.",
        featured: ["Soft satin shine.",
            "Premium smooth touch.",
            "Easy cleaning .",
            "Elegant finish."],
        price: "13,000.00",
        img: "images/Premium Satin.png"
    },
    23: {
        name: "Primer Coat Essential",
        para: "Primer Coat Essential ensures superior bonding and surface stability.It levels imperfections for a flawless topcoat application.A professional-grade base for enhanced coating durability.",
        featured: ["Superior bonding.",
            "Surface leveling.",
            "Enhanced durability .",
            "Professional base."],
        price: "14,000.00",
        img: "images/Primer Coat Essential.png"
    },
    24: {
        name: "Rust Free Primer",
        para: "Rust Free Primer delivers powerful anti-rust protection for metal surfaces.It forms a strong grip that prevents corrosion over time.Ideal for long-term metal safety and performance.",
        featured: ["Anti-rust formula.",
            "Metal surface safety",
            "Long-term protection.",
            "Strong grip."],
        price: "14,500.00",
        img: "images/Rust Free Primer.png"
    },
    31: {
        name: "Sky Coat",
        para: "Sky Coat provides dependable protection for metal structures.It resists weather impact while ensuring smooth application.Designed for long-lasting metal surface durability.",
        featured: ["Metal surface protection.",
            "Weather resistance.",
            "Smooth application .",
            "Long life finish."],
        price: "19,000.00",
        img: "images/Sky Coat.webp"
    },
    32: {
        name: "Foundation Premier",
        para: "Foundation Premier strengthens metal adhesion and corrosion resistance.It ensures uniform coverage for a stable coating base.Built for industrial-grade reliability and performance.",
        featured: ["Strong metal adhesion.",
            "Corrosion resistance.",
            "Uniform coverage .",
            "Durable base."],
        price: "21,000.00",
        img: "images/Foundation Premier.webp"
    },
    33: {
        name: "Ultra Durable Emulsion",
        para: "Ultra Durable Emulsion offers exceptional strength for heavy-duty applications.It resists scratches, wear, and surface damage.Engineered for long-term industrial performance.",
        featured: ["High strength coating.",
            "Industrial grade.",
            "Scratch resistance .",
            "Long lasting."],
        price: "14,000.00",
        img: "images/Ultra Durable Emulsion.png"
    },
    34: {
        name: "Sun Proof Coating",
        para: "Sun Proof Coating shields metal surfaces from heat and UV exposure.It minimizes fading and thermal stress.Ideal for outdoor metal protection in harsh environments.",
        featured: ["Heat protection.",
            "UV resistance.",
            "Fade control .",
            "Out door safety."],
        price: "22,000.00",
        img: "images/Sun Proof Coating.png"
    },
    41: {
        name: "Steel Guard Coating",
        para: "Steel Guard Coating protects steel surfaces against corrosion.It delivers strong adhesion for extended service life.Designed for demanding industrial and structural use.",
        featured: ["Steel protection.",
            "Anti-corrosion.",
            "Long durability .",
            "Strong adhesion."],
        price: "21,000.00",
        img: "images/Steel Guard Coating.png"
    },
    42: {
        name: "Velvet Touch",
        para: "Velvet Touch creates an ultra-smooth base layer.It enhances surface softness for premium topcoat application.Perfect for refined interior finishing preparation.",
        featured: ["Smooth base finish.",
            "Soft texture.",
            "Easy application .",
            "Premium prep."],
        price: "15,000.00",
        img: "images/Velvet Touch.png"
    },
    43: {
        name: "Weather Shield",
        para: "Weather Shield offers advanced resistance against climate damage.It blocks moisture while preventing surface cracking.Built for durable and secure exterior protection.",
        featured: ["Climate protection.",
            "Moisture resistance.",
            "Climate protection .",
            "Strong sealing."],
        price: "18,000.00",
        img: "images/Weather Shield.png"
    },
    44: {
        name: "Roof Seal",
        para: "Roof Seal provides effective leak and crack sealing.It creates a waterproof barrier for roof surfaces.Ensures long-term structural safety and protection.",
        featured: ["Crack prevention.",
            "Water proof barrier.",
            "Crack filling .",
            "Long life seal."],
        price: "15,000.00",
        img: "images/Roof Seal.webp"
    },
    51: {
        name: "Aqua Block",
        para: "Aqua Block delivers complete waterproofing performance.It prevents leaks and structural water damage.Designed for high flexibility and long-term durability.",
        featured: ["Complete waterproofing.",
            "Complete waterproofing.",
            "High flexibility .",
            "Long durability."],
        price: "17,000.00",
        img: "images/Aqua Block.webp"
    },
    52: {
        name: "Matt Finish",
        para: "Matt Finish reduces surface heat while offering a clean roof look.It provides slip resistance and weather durability.Ideal for modern roofing applications.",
        featured: ["Non-slip surface.",
            "Non-slip surface.",
            "Clean look .",
            "Weather resistance."],
        price: "16,500.00",
        img: "images/Matt Finish.png"
    },
    53: {
        name: "images/Cool Onix.png",
        para: "Cool Onix Range protects roofs from moisture penetration.It resists cracking and surface degradation.Ensures strong, long-lasting roof protection.",
        featured: ["Moisture blocking.",
            "Roof protection.",
            " Crack resistance.",
            "Strong coating."],
        price: "18,000.00",
        img: "images/Cool Onix.png"
    },
    54: {
        name: "Top Crest",
        para: "Under Seal Pro penetrates deeply to seal surfaces.It enhances bonding and water resistance.Built for extended roof protection and performance.",
        featured: ["Deep sealing.",
            "Surface bonding.",
            "Long protection .",
            "Water resistance."],
        price: "12,000.00",
        img: "images/Top Crest.png"
    },
    61: {
        name: "Ciel Aura",
        para: "Ciel Aura Finishes deliver a smooth and bright ceiling appearance.They enhance interior spaces with long-lasting durability.Designed for easy maintenance and clean results.",
        featured: ["Smooth ceiling finish.",
            "Bright look.",
            "Easy maintenance .",
            "Long durability."],
        price: "8,000.00",
        img: "images/Ciel Aura.png"
    },
    62: {
        name: "Hydro Flex",
        para: "Hydro Flex Coatings reflect heat to reduce roof temperature.They improve energy efficiency and UV protection.Ideal for climate-smart roofing solutions.",
        featured: ["Heat reflection.",
            "Energy saving.",
            "UV resistance .",
            "Roof safety."],
        price: "10,000.00",
        img: "images/Hydro Flex.png"
    },
    63: {
        name: "Storm Guard",
        para: "Storm Guard Systems provide premium ceiling coverage.They offer uniform texture with crack resistance.Built for long-lasting ceiling performance.",
        featured: ["Premium ceiling cover.",
            "Uniform texture.",
            "Crack resistance .",
            "Long lasting."],
        price: "11,500.00",
        img: "images/Storm Guard.png"
    },
    64: {
        name: "Aqua Tite",
        para: "Aqua Tite Ceiling protects against moisture and stains.It ensures a clean and refined ceiling finish.Designed for durable and reliable surface protection.",
        featured: ["Protective coating.",
            "Moisture resistance.",
            "Clean finish .",
            "Durable surface."],
        price: "14,000.00",
        img: "images/Aqua Tite.png"
    },
};
// Function to open detail section
function openDetailPage(p) {
    document.getElementById("detailName").innerText = p.name;
    document.getElementById("detail-para").innerText = p.para;
    document.querySelector(".detail-features-list").innerText = p.featured;
    document.getElementById("detailPrice").innerText = p.price;
    document.getElementById("detailImg").src = p.img;

    document.querySelector(".detail-section").style.display = "block";
    document.getElementById("detailPage").style.display = "block";

    let featuredList = document.querySelector(".detail-features-list");
    featuredList.innerHTML = ""; // old clear

    if (p.featured && p.featured.length > 0) {
        p.featured.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            featuredList.appendChild(li);
        });
    }


}        // Add click event to all cards
document.querySelectorAll(".card").forEach(card => {
    card.onclick = () => {
        let id = card.id;
        openDetailPage(products[id]);
    };
});

document.getElementById("closeDetail").onclick = function () {
    document.getElementById("detailPage").style.display = "none";
    document.querySelector(".detail-section").style.display = "block";
};

// .........................modal page start................
document.getElementById('buyNowForm').addEventListener('submit', function(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let ordernotes = document.getElementById('ordernotes').value;
    let city = document.getElementById('city').value;

    if(name === '' || email === '' || phone === '' || address === '' || ordernotes === '' || city === ''){
        alert("Please Enter All Fields");
    } else {
        alert("Your Order is Successfully Placed");

        // close bootstrap modal
        var mymodal = document.getElementById('buyNowModal');
        var modal = bootstrap.Modal.getInstance(mymodal);
        modal.hide();

        // clear form
        document.getElementById('buyNowForm').reset();
    }
});

// .........................modal page end................

// ...................products section end ...............

let currentIndex = 0;
let totalReviews = $('.testimonials-review-item').length;

$('#testimonials-nextBtn').click(function () {
    currentIndex++;
    if (currentIndex >= totalReviews) {
        currentIndex = 0;
    }
    $('.testimonials-review-item').removeClass('active');
    $('.testimoials-image-box img').removeClass('active');
    $('.testimonials-review-item').eq(currentIndex).addClass('active');
    $('.testimoials-image-box img').eq(currentIndex).addClass('active');
});

$('#testimonials-prevBtn').click(function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalReviews - 1;
    }
    $('.testimonials-review-item').removeClass('active');
    $('.testimoials-image-box img').removeClass('active');
    $('.testimonials-review-item').eq(currentIndex).addClass('active');
    $('.testimoials-image-box img').eq(currentIndex).addClass('active');
});

// ....................testimonials section end................

// <!-- /* .........................history-section-start.............. */ -->
$(document).ready(function () {
    $('.galleria-history-read-more-btn').click(function () {
        if ($(this).text() == 'READ MORE') {
            $('.galleria-history-full-text').slideDown();
            $(this).text('READ LESS');
        } else {
            $('.galleria-history-full-text').slideUp();
            $(this).text('READ MORE');
        }
    });
});
// <!-- /* .........................history-section-end.............. */ -->

            // <!-- /* .................footer section end..................... */ -->
        $('#footersubscribeBtn').click(function () {
            let subscribe = $('#subscribeInput').val();
            if (subscribe === '') {
                alert('Please enter your email!');
            }   
            else {
                alert('Thanks for subscribing!');
                $('#subscribeInput').val(''); // input clear kar de
            }
        });

            // <!-- /* .................footer section end..................... */ -->