Vue.component('item',{
	template: `
						<div class="item product product-item" id="slider">
							<div class="product-item-info" data-container="product-grid">
					        	<div class="product-info-top cdz-hover-section">
						      	  <a href="#" class="product photo product-item-photo">
					                <span class="main-image">
										<span class="product-image-container" style="width:120px;">
										    <span class="product-image-wrapper" style="padding-bottom: 100%;">
										        <img class="product-image-photo" src="images/caprice-50kg.jpg" width="120" height="120" alt=""></span>
										</span>
									</span>
									<span class="hover-image">
										<span class="product-image-container" style="width:120px;">
										    <span class="product-image-wrapper" style="padding-bottom: 100%;">
										        <img class="product-image-photo" src="images/caprice-50kg.jpg" width="120" height="120" alt=""></span>
										</span>
									</span>
					            </a>     				                   
						<div class="qs-button-icon">
							<a class="qs-button " href="javascript:void(0)" data-href="" title="">
								<span><span>  </span></span></a>						
								<div class="cdz-product-bottom">
                                	<div class="cdz-buttons-container">
                                    	<div class="cdz-buttons-inner">
				                        <form data-role="tocart-form" action="" method="post">
				                                    <input type="hidden" name="product" value="">
				                                    <input type="hidden" name="uenc" value="">
				                                    <input name="form_key" type="hidden" value="">				                                    
				                                     <div class="field qty box-tocart">								           
											            <div class="control">
											            	<div class="qty-minus"> <a class="btn-qty minus" href="#">-</a></div>
																<div class="qty-input">
											                		<input type="number" name="qty" id="item_qty" maxlength="12" value="1" title="Qty" class="input-text qty" data-validate="">
											                    </div>
																<div class="qty-plus"> <a class="btn-qty plus" href="#">+</a></div>
											            </div>
											        </div>
											        	
											      	 <button type="submit" title="Add to Cart" class="action tocart primary">
				                                        <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
				                                    </button>
				                                </form>
				                            		<div data-role="add-to-links" class="actions-secondary">
				                            		 	<a href="http://index.html/#" class="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="" data-action="add-to-wishlist" role="button">
				                                    		<span>Watching</span>
				                                		</a>
				                            	  		<a href="http://index.html/#" class="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="" role="button">
				                                			<span>Add to Compare</span>
				                           				 </a>
				                       				 </div>										
				                        		</div>
				                   			 </div>
				                		</div>
									</div> 
								</div>
				            <div class="product details product-item-details">
				                 <strong class="product name product-item-name">
				                    <a class="product-item-link" href="http://index.html/">
				                        Cap Rice - 50KG				    
				                    </a>
				                </strong>
				                	<div class="price-box price-final_price" data-role="priceBox" data-product-id="2594">
										<span class="price-container price-final_price tax weee">
											<span id="old-price-2594-final_price" data-price-amount="21500" data-price-type="finalPrice" class="price-wrapper ">
												<span class="price">₦21,500.00</span>
										    </span>
										</span>
									</div>	
				                <div class="product-item-inner">				                    
				                </div>		
				            </div>
						</div>
					</div>
											
	`
		
});
new Vue({
	el:'#root',
});