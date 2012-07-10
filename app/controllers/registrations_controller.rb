class RegistrationsController < Devise::RegistrationsController
  
  
   def edit
     @user = current_user
   end

   
   
   def update
         @user = User.find(current_user.id)
         if @user.update_attributes(params[:user])
           # Sign in the user bypassing validation in case his password changed
           sign_in @user, :bypass => true
          I18n.locale = current_user.locale.to_sym if current_user.locale.present?
           redirect_to edit_user_registration_path
           
         else
           render "edit"
         end
       end

  protected

    def after_update_path_for(resource)
      user_path(resource)
    end
end