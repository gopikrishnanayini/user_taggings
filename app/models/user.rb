class User < ApplicationRecord
  include AASM
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: { message: "Can't be blank" }
  validates :last_name, presence: { message: "Can't be blank" }
  validates :password , :format => {:with => /\A(?=.*[a-zA-Z])(?=.*[0-9]).{8,}\z/, message: "must be at least 8 characters and include one number and one letter."}
  before_save :encrypt_password
  after_save :clear_password
  has_many :tags, :dependent => :destroy

  aasm :column => :status do
    state :enable, :initial => true
    state :disable

    event :disable do
      transitions :from => [:enable], :to => [:disable]
    end
    event :enable  do
      transitions :from => [:disable], :to => [:enable]
    end
  end

  def perform_event(event)
    if event == 'enabled'
      self.enable!
    elsif event == 'disable'
      self.disable!
    end
  end


  def encrypt_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
    end
  end

  def clear_password
    self.password = nil
  end
end
