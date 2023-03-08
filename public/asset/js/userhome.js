        var CLOSE = "Close Categories";
        var MORE = "More Categories";
        var baseDir = "\/demo4\/decoration3\/";
        var ceFrontendConfig = {
            "isEditMode": "",
            "stretchedSectionContainer": "",
            "is_rtl": false
        };


        
        // var id_lang = 1;
        // var isLogged = false;
        // var isLoggedWishlist = false;
        // var loggin_required = "You have to login to use wishlist";
        // var loggin_text = "Login";
        // var loggin_url = "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/my-account";
        // var pday_text = "day";
        // var pdays_text = "days";
        // var phour_text = "hour";
        // var phours_text = "hours";
        // var pmin_text = "min";
        // var pmins_text = "mins";
        // var pos_cart_count = 0;
        // var pos_fakeorder = {
        //     "products": [{
        //         "id_product": "1",
        //         "name": "Stone Wall Clock",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/338-small_default\/fruit-dried-mango-slices.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/1-fruit-dried-mango-slices.html"
        //     }, {
        //         "id_product": "2",
        //         "name": "Stone Table Mirror",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/344-small_default\/large-mango-single.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/2-large-mango-single.html"
        //     }, {
        //         "id_product": "4",
        //         "name": "White Globe Wall Light",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/353-small_default\/organic-banana-chips.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/4-89-organic-banana-chips.html#\/30-size-small"
        //     }, {
        //         "id_product": "6",
        //         "name": "Bedside Table Accessories",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/363-small_default\/utella-hazelnut-spread.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/6-utella-hazelnut-spread.html"
        //     }, {
        //         "id_product": "8",
        //         "name": "Wooden Circle Mirror",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/374-small_default\/tomato-riesentraube.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/8-101-tomato-riesentraube.html#\/30-size-small"
        //     }, {
        //         "id_product": "12",
        //         "name": "Special Wall Mirror",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/393-small_default\/organic-dried-apricots.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/12-104-organic-dried-apricots.html#\/30-size-small"
        //     }, {
        //         "id_product": "14",
        //         "name": "Orchid Flower Paint",
        //         "image": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/403-small_default\/strawberries-pack-300g.jpg",
        //         "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/home\/14-strawberries-pack-300g.html"
        //     }],
        //     "frame_time": "60",
        //     "time_first": "3000",
        //     "time_between": "5000",
        //     "time_display": "7000",
        //     "content_text": "Someone has purchased",
        //     "button_text": "View product",
        //     "ago_text": "ago",
        //     "minute_text": "minute",
        //     "minutes_text": "minutes",
        //     "hour_text": "hour",
        //     "hours_text": "hours"
        // };
        var pos_subscription = "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/module\/poselements\/subscription";
        // var poscompare = {
        //     "nbProducts": 2,
        //     "IdProducts": {
        //         "13": 13,
        //         "3": 3
        //     },
        //     "success_text": "Product added to compare.",
        //     "compare_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/module\/poscompare\/comparePage",
        //     "compare_text": "View compare products"
        // };
        // var pospopup = {
        //     "time": 10,
        //     "name": "posnewsletterpopup",
        //     "delay": 2500
        // };
        var possearch_number = 100;
        var prestashop = {
            "cart": {
                "products": [],
                "totals": {
                    "total": {
                        "type": "total",
                        "label": "Total",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "total_including_tax": {
                        "type": "total",
                        "label": "Total (tax incl.)",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "total_excluding_tax": {
                        "type": "total",
                        "label": "Total (tax excl.)",
                        "amount": 0,
                        "value": "$0.00"
                    }
                },
                "subtotals": {
                    "products": {
                        "type": "products",
                        "label": "Subtotal",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "discounts": null,
                    "shipping": {
                        "type": "shipping",
                        "label": "Shipping",
                        "amount": 0,
                        "value": ""
                    },
                    "tax": {
                        "type": "tax",
                        "label": "Taxes",
                        "amount": 0,
                        "value": "$0.00"
                    }
                },
                "products_count": 0,
                "summary_string": "0 items",
                "vouchers": {
                    "allowed": 1,
                    "added": []
                },
                "discounts": [],
                "minimalPurchase": 0,
                "minimalPurchaseRequired": ""
            },
            "currency": {
                "id": 1,
                "name": "US Dollar",
                "iso_code": "USD",
                "iso_code_num": "840",
                "sign": "$"
            },
            "customer": {
                "lastname": null,
                "firstname": null,
                "email": null,
                "birthday": null,
                "newsletter": null,
                "newsletter_date_add": null,
                "optin": null,
                "website": null,
                "company": null,
                "siret": null,
                "ape": null,
                "is_logged": false,
                "gender": {
                    "type": null,
                    "name": null
                },
                "addresses": []
            },
            // "language": {
            //     "name": "English (English)",
            //     "iso_code": "en",
            //     "locale": "en-US",
            //     "language_code": "en-us",
            //     "is_rtl": "0",
            //     "date_format_lite": "m\/d\/Y",
            //     "date_format_full": "m\/d\/Y H:i:s",
            //     "id": 1
            // },
            "page": {
                "title": "",
                "canonical": null,
                "meta": {
                    "title": "Ecolife  Responsive Prestashop Theme",
                    "description": "Shop powered by PrestaShop",
                    "keywords": "",
                    "robots": "index"
                },
                "page_name": "index",
                "body_classes": {
                    "lang-en": true,
                    "lang-rtl": false,
                    "country-US": true,
                    "currency-USD": true,
                    "layout-full-width": true,
                    "page-index": true,
                    "tax-display-disabled": true
                },
                "admin_notifications": []
            },
            "shop": {
                "name": "Ecolife  Responsive Prestashop Theme",
                "logo": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/logo-165225832015.jpg",
                "stores_icon": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/logo_stores.png",
                "favicon": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/favicon.ico"
            },
            "urls": {
                "base_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/",
                "current_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/",
                "shop_domain_url": "https:\/\/ecolife.posthemes.com",
                "img_ps_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/",
                "img_cat_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/c\/",
                "img_lang_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/l\/",
                "img_prod_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/",
                "img_manu_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/m\/",
                "img_sup_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/su\/",
                "img_ship_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/s\/",
                "img_store_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/st\/",
                "img_col_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/co\/",
                "img_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/themes\/theme_ecolife\/assets\/img\/",
                "css_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/themes\/theme_ecolife\/assets\/css\/",
                "js_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/themes\/theme_ecolife\/assets\/js\/",
                "pic_url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/upload\/",
                "pages": {
                    "address": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/address",
                    "addresses": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/addresses",
                    "authentication": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/login",
                    "cart": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/cart",
                    "category": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=category",
                    "cms": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=cms",
                    "contact": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/contact-us",
                    "discount": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/discount",
                    "guest_tracking": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/guest-tracking",
                    "history": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/order-history",
                    "identity": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/identity",
                    "index": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/",
                    "my_account": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/my-account",
                    "order_confirmation": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/order-confirmation",
                    "order_detail": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=order-detail",
                    "order_follow": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/order-follow",
                    "order": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/order",
                    "order_return": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=order-return",
                    "order_slip": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/credit-slip",
                    "pagenotfound": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/page-not-found",
                    "password": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/password-recovery",
                    "pdf_invoice": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=pdf-invoice",
                    "pdf_order_return": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=pdf-order-return",
                    "pdf_order_slip": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=pdf-order-slip",
                    "prices_drop": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/prices-drop",
                    "product": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/index.php?controller=product",
                    "search": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/search",
                    "sitemap": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/sitemap",
                    "stores": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/stores",
                    "supplier": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/supplier",
                    "register": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/login?create_account=1",
                    "order_login": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/order?login=1"
                },
                "alternative_langs": {
                    "en-us": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/",
                    "fr-fr": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/fr\/"
                },
                "theme_assets": "\/demo4\/decoration3\/themes\/theme_ecolife\/assets\/",
                "actions": {
                    "logout": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/?mylogout="
                },
                "no_picture_image": {
                    "bySize": {
                        "small_default": {
                            "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-small_default.jpg",
                            "width": 98,
                            "height": 98
                        },
                        "cart_default": {
                            "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-cart_default.jpg",
                            "width": 125,
                            "height": 125
                        },
                        "home_default": {
                            "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-home_default.jpg",
                            "width": 400,
                            "height": 400
                        },
                        "medium_default": {
                            "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-medium_default.jpg",
                            "width": 600,
                            "height": 600
                        },
                        "large_default": {
                            "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-large_default.jpg",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "small": {
                        "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-small_default.jpg",
                        "width": 98,
                        "height": 98
                    },
                    "medium": {
                        "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-home_default.jpg",
                        "width": 400,
                        "height": 400
                    },
                    "large": {
                        "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/img\/p\/en-default-large_default.jpg",
                        "width": 800,
                        "height": 800
                    },
                    "legend": ""
                }
            },
            "configuration": {
                "display_taxes_label": false,
                "display_prices_tax_incl": false,
                "is_catalog": false,
                "show_prices": true,
                "opt_in": {
                    "partner": true
                },
                "quantity_discount": {
                    "type": "discount",
                    "label": "Unit discount"
                },
                "voucher_enabled": 1,
                "return_enabled": 0
            },
            "field_required": [],
            "breadcrumb": {
                "links": [{
                    "title": "Home",
                    "url": "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/"
                }],
                "count": 1
            },
            "link": {
                "protocol_link": "https:\/\/",
                "protocol_content": "https:\/\/"
            },
            "time": 1675509324,
            "static_token": "44de839971e67a062fc114b478c66f62",
            "token": "52f51d4224a2328b7171ead49d61f7b7",
            "debug": false
        };
        // var psec_text = "sec";
        // var psecs_text = "secs";
        // var psemailsubscription_subscription = "https:\/\/ecolife.posthemes.com\/demo4\/decoration3\/en\/module\/ps_emailsubscription\/subscription";
        // var psr_icon_color = "#000000";
        // var qm_icon_color = "#253237";
        // var static_token = "44de839971e67a062fc114b478c66f62";
        // var wishlistProductsIdsobject = [];

