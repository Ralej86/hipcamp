# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email_address, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email_address, uniqueness: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :listings,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :Listing

  has_many :bookings,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :Booking

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author,
    class_name: :Review


  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
