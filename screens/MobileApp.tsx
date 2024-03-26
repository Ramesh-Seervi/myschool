import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const MobileApp = () => {
  return (
    <View style={styles.mobileapp}>
      <View style={[styles.mobileappChild, styles.mobileappChildBg]} />
      <View style={[styles.languageWrapper, styles.wrapperSpaceBlock]}>
        <View style={styles.language}>
          <View style={styles.translate02Parent}>
            <Image
              style={styles.iconLayout3}
              contentFit="cover"
              source={require("../assets/translate02.png")}
            />
            <Text style={[styles.eng, styles.engTypo]}>Eng</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.logoColorWrapper}>
            <Image
              style={styles.logoColorIcon}
              contentFit="cover"
              source={require("../assets/logo-color.png")}
            />
          </View>
          <View style={styles.shoppingCart01Parent}>
            <Image
              style={styles.iconLayout3}
              contentFit="cover"
              source={require("../assets/shoppingcart01.png")}
            />
            <Image
              style={[styles.menu04Icon, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/menu04.png")}
            />
          </View>
        </View>
        <View style={styles.searchBox}>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/searchlg.png")}
          />
          <Text style={[styles.searchInVenderlane, styles.sr2901Typo]}>
            Search in venderlane
          </Text>
        </View>
      </View>
      <Image
        style={[styles.group1596511, styles.frameViewPosition]}
        contentFit="cover"
        source={require("../assets/group-159651-1.png")}
      />
      <View style={[styles.ellipseParent, styles.parentPosition]}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <View style={[styles.sidenav, styles.parentPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/personal.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Personal Care
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.sidenav1, styles.sidenavPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Home Care
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.sidenav2, styles.sidenavPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/office.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Office Care
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.sidenav3, styles.sidenavPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/animal.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Animal Care
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.sidenav4, styles.sidenavPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/car.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Car Care
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.sidenav5, styles.sidenavPosition]}>
        <View style={[styles.sidebarNavItem, styles.parentFlexBox]}>
          <View style={styles.personalParent}>
            <Image
              style={styles.personalIcon}
              contentFit="cover"
              source={require("../assets/other-service.png")}
            />
            <Text style={[styles.personalCare, styles.personalTypo]}>
              Other Servies
            </Text>
          </View>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/chevronright1.png")}
          />
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View style={[styles.frameWrapper, styles.wrapperSpaceBlock]}>
          <View style={styles.translate02Parent}>
            <Text style={[styles.personalCare1, styles.careClr]}>
              Personal care
            </Text>
            <View style={styles.carCareParent}>
              <Text style={[styles.carCare1, styles.careClr]}>Car care</Text>
              <Text style={[styles.animalCare1, styles.careClr]}>
                Animal care
              </Text>
              <Text style={[styles.animalCare1, styles.careClr]}>
                Home care
              </Text>
              <Text style={[styles.animalCare1, styles.careClr]}>
                Office care
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-159653.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View>
          <View style={styles.bestSellerInPersonalCareParent}>
            <Text style={[styles.bestSellerIn, styles.careClr]}>
              Best seller in personal care
            </Text>
            <View style={styles.viewAllParent}>
              <Text style={[styles.personalCare1, styles.careClr]}>
                View all
              </Text>
              <Image
                style={styles.arrowNarrowRightIcon}
                contentFit="cover"
                source={require("../assets/arrownarrowright.png")}
              />
            </View>
          </View>
          <View style={styles.productCardParent}>
            <View>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-86.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-861.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-862.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-863.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParent14}>
          <View style={styles.bestSellerInPersonalCareParent}>
            <Text style={[styles.bestSellerIn, styles.careClr]}>
              Standard products
            </Text>
            <View style={styles.viewAllParent}>
              <Text style={[styles.personalCare1, styles.careClr]}>
                View all
              </Text>
              <Image
                style={styles.arrowNarrowRightIcon}
                contentFit="cover"
                source={require("../assets/arrownarrowright.png")}
              />
            </View>
          </View>
          <View style={styles.productCardParent}>
            <View>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-864.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-865.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-866.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-867.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParent14}>
          <View style={styles.bestSellerInPersonalCareParent}>
            <Text
              style={[styles.bestSellerIn, styles.careClr]}
            >{`Discounted, Promo  & combo products`}</Text>
            <View style={styles.viewAllParent}>
              <Text style={[styles.personalCare1, styles.careClr]}>
                View all
              </Text>
              <Image
                style={styles.arrowNarrowRightIcon}
                contentFit="cover"
                source={require("../assets/arrownarrowright.png")}
              />
            </View>
          </View>
          <View style={styles.productCardParent}>
            <View>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-868.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-869.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8610.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8611.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParent14}>
          <View style={styles.bestSellerInPersonalCareParent}>
            <Text style={[styles.bestSellerIn, styles.careClr]}>
              Clearance sale products
            </Text>
            <View style={styles.viewAllParent}>
              <Text style={[styles.personalCare1, styles.careClr]}>
                View all
              </Text>
              <Image
                style={styles.arrowNarrowRightIcon}
                contentFit="cover"
                source={require("../assets/arrownarrowright.png")}
              />
            </View>
          </View>
          <View style={styles.productCardParent}>
            <View>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8612.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8613.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8614.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productCard1}>
              <Image
                style={styles.productCardChild}
                contentFit="cover"
                source={require("../assets/frame-8615.png")}
              />
              <View style={styles.frameParent2}>
                <View>
                  <View>
                    <View style={styles.iconParent}>
                      <Image
                        style={styles.iconLayout2}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon1.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon2.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon3.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/icon4.png")}
                      />
                    </View>
                    <Text style={[styles.french326Wall, styles.sr2901Typo]}>
                      French 32.6’’ Wall Mounted Clothes Rack (Set of 2) by
                      Williston…
                    </Text>
                  </View>
                  <View style={styles.sr290Parent}>
                    <Text style={[styles.sr290, styles.sr290Typo]}>SR 290</Text>
                    <Text style={[styles.sr2901, styles.sr2901Typo]}>
                      SR 290
                    </Text>
                  </View>
                </View>
                <View style={[styles.cart, styles.parentFlexBox]}>
                  <Image
                    style={styles.shoppingCart01Icon1}
                    contentFit="cover"
                    source={require("../assets/shoppingcart011.png")}
                  />
                  <Text style={[styles.addToCart, styles.engTypo]}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.ourSuppliersParent, styles.parentBg]}>
        <Text style={[styles.ourSuppliers, styles.sr290Typo]}>
          Our Suppliers
        </Text>
        <View style={styles.image347Parent}>
          <Image
            style={[styles.image347Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-347.png")}
          />
          <Image
            style={styles.frameChild2}
            contentFit="cover"
            source={require("../assets/group-158844.png")}
          />
          <Image
            style={styles.imcLogoIcon}
            contentFit="cover"
            source={require("../assets/imc-logo.png")}
          />
        </View>
      </View>
      <View style={[styles.strategicPartnersParent, styles.parentFlexBox]}>
        <Text
          style={[styles.ourSuppliers, styles.sr290Typo]}
        >{`Strategic Partners `}</Text>
        <View style={styles.image347Parent}>
          <Image
            style={styles.image343Icon}
            contentFit="cover"
            source={require("../assets/image-343.png")}
          />
          <Image
            style={styles.image346Icon}
            contentFit="cover"
            source={require("../assets/image-346.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent53, styles.frameParentPosition]}>
        <View style={[styles.frameParent54, styles.parentBg]}>
          <View>
            <View style={styles.frameParent56}>
              <View style={styles.informationParent}>
                <Text style={[styles.information, styles.followUsOnTypo]}>
                  Information
                </Text>
                <View style={styles.aboutUsParent}>
                  <Text style={[styles.aboutUs, styles.sr2901Typo]}>
                    About us
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Our Story
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    FAQ’s
                  </Text>
                  <Text
                    style={[styles.ourStory, styles.sr2901Typo]}
                  >{`Terms & Conditions`}</Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Privacy policy
                  </Text>
                </View>
              </View>
              <View style={styles.customerServicesParent}>
                <Text style={[styles.information, styles.followUsOnTypo]}>
                  Customer Services
                </Text>
                <View style={styles.aboutUsParent}>
                  <Text style={[styles.aboutUs, styles.sr2901Typo]}>
                    My Orders
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    My account
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Become a seller
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Become a service provider
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Sign up as buyer
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.frameParent57}>
              <View style={styles.departmentsParent}>
                <Text style={[styles.information, styles.followUsOnTypo]}>
                  Departments
                </Text>
                <View style={styles.aboutUsParent}>
                  <Text style={[styles.aboutUs, styles.sr2901Typo]}>
                    Personal Care
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Home care
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Car care
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Pet care
                  </Text>
                  <Text style={[styles.ourStory, styles.sr2901Typo]}>
                    Office care
                  </Text>
                </View>
              </View>
              <View style={styles.customerServicesParent}>
                <Text style={[styles.information, styles.followUsOnTypo]}>
                  Contact us
                </Text>
                <View style={styles.frameParent58}>
                  <View>
                    <Text
                      style={[styles.forInquiryAnd, styles.forInquiryAndTypo]}
                    >
                      For inquiry and Support contact with
                    </Text>
                    <Text
                      style={[
                        styles.icarevenderlanecom,
                        styles.forInquiryAndTypo,
                      ]}
                    >
                      icare@venderlane.com
                    </Text>
                  </View>
                  <View style={styles.frameParent59}>
                    <View
                      style={[styles.infoCircleParent, styles.parentSpaceBlock]}
                    >
                      <Image
                        style={styles.iconLayout3}
                        contentFit="cover"
                        source={require("../assets/infocircle.png")}
                      />
                      <Text style={[styles.quickHelp, styles.sr290Typo]}>
                        Quick Help
                      </Text>
                    </View>
                    <View style={[styles.phoneParent, styles.parentSpaceBlock]}>
                      <Image
                        style={styles.iconLayout3}
                        contentFit="cover"
                        source={require("../assets/phone.png")}
                      />
                      <Text style={[styles.callUs, styles.sr290Typo]}>
                        Call Us
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lineView} />
          <View style={styles.frameParent60}>
            <View style={styles.translate02Parent}>
              <Text style={[styles.followUsOn, styles.sr290Typo]}>
                Follow us on social
              </Text>
              <View style={styles.carCareParent}>
                <Image
                  style={[styles.image347Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/twitter.png")}
                />
                <Image
                  style={[styles.instagramIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/instagram.png")}
                />
                <Image
                  style={[styles.instagramIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/facebook.png")}
                />
              </View>
            </View>
            <View style={styles.accessOnTheGoDownloadOurParent}>
              <Text style={[styles.followUsOn, styles.sr290Typo]}>
                Access on the go, Download our app
              </Text>
              <View style={styles.frameParent61}>
                <View style={styles.vectorLayout}>
                  <Image
                    style={[styles.rectangleIcon, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-17821.png")}
                  />
                  <View style={styles.groupParent}>
                    <Image
                      style={[styles.groupChild, styles.groupChildLayout]}
                      contentFit="cover"
                      source={require("../assets/group-155276.png")}
                    />
                    <Image
                      style={[styles.groupItem, styles.groupChildLayout]}
                      contentFit="cover"
                      source={require("../assets/group-155320.png")}
                    />
                  </View>
                </View>
                <View style={[styles.vectorGroup, styles.vectorLayout]}>
                  <Image
                    style={[styles.rectangleIcon, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-17821.png")}
                  />
                  <View style={styles.groupContainer}>
                    <Image
                      style={[styles.groupInner, styles.groupChildLayout]}
                      contentFit="cover"
                      source={require("../assets/group-155275.png")}
                    />
                    <Image
                      style={[styles.groupChild1, styles.groupChildLayout]}
                      contentFit="cover"
                      source={require("../assets/group-1552761.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper1}>
          <View>
            <View style={styles.directRemittanceWeAcceptParent}>
              <Text style={[styles.directRemittanceContainer, styles.careTypo]}>
                <Text
                  style={styles.directRemittance}
                >{`Direct remittance : `}</Text>
                <Text style={styles.sr2901Typo}>
                  We accept all major payment methods
                </Text>
              </Text>
              <View style={styles.groupGroup}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
                <Image
                  style={[styles.layer12Icon, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/layer-12.png")}
                />
              </View>
            </View>
            <Text style={[styles.copyright2024Venderlanecom, styles.careTypo]}>
              Copyright@2024 Venderlane.com | All Rights Reserved
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileappChildBg: {
    backgroundColor: Color.colorLinen,
    width: 390,
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  engTypo: {
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  iconLayout3: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  sr2901Typo: {
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
  },
  frameViewPosition: {
    left: 20,
    position: "absolute",
  },
  frameLayout: {
    height: 8,
    width: 8,
  },
  parentFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  personalTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  sidenavPosition: {
    height: 64,
    left: 27,
    flexDirection: "row",
    position: "absolute",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  careClr: {
    color: Color.bg,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  iconLayout2: {
    width: 11,
    borderRadius: 0,
    height: 10,
  },
  sr290Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  parentBg: {
    backgroundColor: Color.colorAntiquewhite_100,
    width: 390,
  },
  iconLayout1: {
    width: 20,
    height: 20,
  },
  followUsOnTypo: {
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.colorGray_200,
  },
  forInquiryAndTypo: {
    lineHeight: 18,
    color: Color.colorGray_200,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_xs,
  },
  parentSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorLayout: {
    height: 56,
    width: 170,
    overflow: "hidden",
  },
  careTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  groupIconPosition: {
    bottom: "9.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mobileappChild: {
    top: 863,
    height: 6742,
    width: 390,
    left: 0,
    position: "absolute",
  },
  eng: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.nav,
    fontFamily: FontFamily.avenir,
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: FontSize.size_xs,
  },
  translate02Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  chevronRightIcon: {
    marginLeft: 12,
  },
  language: {
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.topBg,
  },
  languageWrapper: {
    top: 0,
    right: 0,
    alignItems: "flex-end",
    backgroundColor: Color.topBg,
    width: 390,
    position: "absolute",
  },
  logoColorIcon: {
    width: 135,
    height: 26,
  },
  logoColorWrapper: {
    height: 26,
    flexDirection: "row",
  },
  menu04Icon: {
    marginLeft: 24,
  },
  shoppingCart01Parent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    width: 390,
    backgroundColor: Color.colorGray_200,
  },
  searchInVenderlane: {
    marginLeft: 8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.nav,
  },
  searchBox: {
    borderRadius: 12,
    backgroundColor: "rgba(213, 199, 157, 0.1)",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: 172,
    marginTop: 4,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 22,
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.bg,
    marginLeft: -195,
    left: "50%",
    alignItems: "center",
  },
  group1596511: {
    top: 136,
    height: 176,
    width: 350,
  },
  frameItem: {
    marginLeft: 4,
  },
  ellipseParent: {
    marginLeft: -28,
    top: 324,
    alignItems: "center",
    flexDirection: "row",
  },
  personalIcon: {
    width: 48,
    height: 48,
  },
  personalCare: {
    marginLeft: 12,
    color: Color.nav,
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  personalParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  sidebarNavItem: {
    width: 328,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "space-between",
  },
  sidenav: {
    marginLeft: -168,
    top: 391,
    backgroundColor: Color.colorDarkslategray,
    flexDirection: "row",
  },
  sidenav1: {
    top: 463,
    backgroundColor: Color.topBg,
  },
  sidenav2: {
    top: 535,
    backgroundColor: Color.colorDarkslategray,
  },
  sidenav3: {
    top: 607,
    backgroundColor: Color.topBg,
  },
  sidenav4: {
    top: 679,
    backgroundColor: Color.colorDarkslategray,
  },
  sidenav5: {
    top: 751,
    backgroundColor: Color.topBg,
  },
  personalCare1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  carCare1: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  animalCare1: {
    marginLeft: 16,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  carCareParent: {
    marginLeft: 16,
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
  },
  groupIcon: {
    height: 0,
    marginTop: 12,
    width: 390,
  },
  frameContainer: {
    top: 885,
  },
  bestSellerIn: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  arrowNarrowRightIcon: {
    width: 14,
    height: 14,
    marginLeft: 8,
    overflow: "hidden",
  },
  viewAllParent: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  bestSellerInPersonalCareParent: {
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  productCardChild: {
    height: 166,
    width: 165,
    overflow: "hidden",
  },
  icon1: {
    marginLeft: 1.43,
  },
  iconParent: {
    height: 10,
    flexDirection: "row",
  },
  french326Wall: {
    color: Color.colorGray_200,
    width: 165,
    marginTop: 12,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  sr290: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
  },
  sr2901: {
    textDecoration: "line-through",
    color: Color.colorGray_100,
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  sr290Parent: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  shoppingCart01Icon1: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  addToCart: {
    marginLeft: 12,
    textAlign: "left",
    color: Color.nav,
    fontFamily: FontFamily.avenir,
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: FontSize.size_xs,
  },
  cart: {
    paddingHorizontal: Padding.p_7xl,
    marginTop: 20,
    backgroundColor: Color.colorGray_200,
  },
  frameParent2: {
    marginTop: 16,
    alignItems: "center",
  },
  productCard1: {
    marginLeft: 20,
  },
  productCardParent: {
    flexWrap: "wrap",
    marginTop: 12,
    width: 350,
    flexDirection: "row",
  },
  frameParent14: {
    marginTop: 48,
  },
  frameView: {
    top: 937,
    width: 348,
    alignItems: "center",
  },
  ourSuppliers: {
    color: Color.bg,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  image347Icon: {
    height: 20,
  },
  frameChild2: {
    width: 70,
    height: 20,
    marginLeft: 16,
  },
  imcLogoIcon: {
    width: 76,
    height: 16,
    marginLeft: 16,
  },
  image347Parent: {
    marginLeft: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  ourSuppliersParent: {
    top: 4184,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    left: 0,
    position: "absolute",
  },
  image343Icon: {
    width: 101,
    height: 27,
  },
  image346Icon: {
    width: 43,
    height: 16,
    marginLeft: 16,
  },
  strategicPartnersParent: {
    top: 4220,
    left: "50%",
    position: "absolute",
    marginLeft: -195,
    paddingHorizontal: Padding.p_xl,
    width: 390,
    backgroundColor: Color.colorLinen,
  },
  information: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  aboutUs: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  ourStory: {
    marginTop: 10,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  aboutUsParent: {
    marginTop: 12,
  },
  informationParent: {
    width: 148,
  },
  customerServicesParent: {
    marginLeft: 48,
  },
  frameParent56: {
    flexDirection: "row",
  },
  departmentsParent: {
    width: 144,
  },
  forInquiryAnd: {
    width: 154,
  },
  icarevenderlanecom: {
    marginTop: 4,
  },
  quickHelp: {
    color: Color.colorGray_200,
    marginLeft: 8,
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
  },
  infoCircleParent: {
    backgroundColor: Color.nav,
  },
  callUs: {
    marginLeft: 8,
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
    color: Color.nav,
  },
  phoneParent: {
    width: 137,
    marginTop: 12,
    backgroundColor: Color.bg,
  },
  frameParent59: {
    marginTop: 18,
  },
  frameParent58: {
    marginTop: 12,
    paddingBottom: Padding.p_5xs,
  },
  frameParent57: {
    marginTop: 48,
    flexDirection: "row",
  },
  lineView: {
    borderColor: "#ded4ba",
    borderTopWidth: 1,
    width: 330,
    height: 1,
    marginTop: 32,
    borderStyle: "solid",
  },
  followUsOn: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  instagramIcon: {
    height: 20,
    marginLeft: 20,
  },
  rectangleIcon: {
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild: {
    height: "97.98%",
    width: "75.39%",
    top: "2.02%",
    left: "24.61%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
  },
  groupItem: {
    height: "95.96%",
    width: "18.77%",
    right: "81.23%",
    bottom: "4.04%",
    left: "0%",
    top: "0%",
  },
  groupParent: {
    height: "53.04%",
    width: "79.59%",
    top: "25%",
    right: "9.59%",
    bottom: "21.96%",
    left: "10.82%",
    position: "absolute",
  },
  groupInner: {
    height: "85.81%",
    width: "16.9%",
    top: "5.54%",
    right: "83.1%",
    bottom: "8.65%",
    left: "0%",
  },
  groupChild1: {
    width: "71.81%",
    right: "-0.08%",
    left: "28.28%",
    bottom: "0%",
    maxWidth: "100%",
    top: "0%",
    height: "100%",
  },
  groupContainer: {
    height: "51.61%",
    width: "71.35%",
    top: "26.07%",
    right: "14.18%",
    bottom: "22.32%",
    left: "14.47%",
    position: "absolute",
  },
  vectorGroup: {
    marginLeft: 12,
  },
  frameParent61: {
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  accessOnTheGoDownloadOurParent: {
    marginTop: 24,
    justifyContent: "center",
  },
  frameParent60: {
    marginTop: 32,
  },
  frameParent54: {
    paddingHorizontal: 22,
    paddingVertical: 48,
  },
  directRemittance: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
  },
  directRemittanceContainer: {
    width: 194,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  groupIcon1: {
    height: "76.92%",
    width: "28.08%",
    top: "13.85%",
    right: "71.92%",
    left: "0%",
  },
  groupIcon2: {
    height: "84.62%",
    width: "31.79%",
    top: "6.15%",
    right: "31.42%",
    left: "36.79%",
  },
  layer12Icon: {
    width: "20.11%",
    left: "79.89%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  groupGroup: {
    width: 108,
    height: 13,
  },
  directRemittanceWeAcceptParent: {
    width: 352,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  copyright2024Venderlanecom: {
    marginTop: 20,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  frameWrapper1: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    width: 390,
  },
  frameParent53: {
    top: 4263,
  },
  mobileapp: {
    flex: 1,
    height: 5066,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_200,
  },
});

export default MobileApp;
