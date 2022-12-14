class Car < ApplicationRecord
  validates :model, presence: true, length: {minimum: 2, maximum: 30}
  validates :maker, presence: true, length: {minimum: 2, maximum: 20}
  validates :year, presence: true, length: {minimum: 4, maximum: 4}

end
