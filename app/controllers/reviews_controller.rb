class ReviewsController < ApplicationController
  def new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.cocktail = Cocktail.find(params[:cocktail_id])
    @review.save
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating)
  end
end
