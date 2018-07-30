class DosesController < ApplicationController

  def show
    @dose = Dose.find(params[:id])
  end

  def new
    @dose = Dose.new
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  def create
    @dose = Dose.new(dose_params)
    # @cocktail = Cocktail.find(@dose.cocktail_id)
    if @dose.save
      redirect_to cocktail_path(@dose.cocktail_id)
    else
      render 'new'
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @dose.destroy
  end

  private

  def dose_params
    params.require(:dose).permit(:description, :cocktail_id, :ingredient_id)
  end
end
