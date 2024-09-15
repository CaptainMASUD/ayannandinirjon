import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python'; // Import Python language syntax highlighting
import 'prismjs/themes/prism-tomorrow.css'; // You can use any Prism theme
import { FaRegCopy, FaSave, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PythonCodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks after component mounts
  }, []);

  const codeString = `
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def check_password(self, password):
        return self.password == password

    def set_password(self, new_password):
        self.password = new_password
        print("Password updated successfully.")

class UserManager:
    def __init__(self):
        self.users = []

    def create_user(self, username, password):
        self.users.append(User(username, password))
        print("Account created successfully.")

    def login(self, username, password):
        for user in self.users:
            if user.username == username:
                if user.check_password(password):
                    print("Login successful.")
                    return user
                else:
                    print("Incorrect password.")
                    return None
        print("User not found.")
        return None

    def forgot_password(self, username):
        for user in self.users:
            if user.username == username:
                new_password = input("Enter new password: ")
                user.set_password(new_password)
                return True
        print("User not found.")
        return False

    def get_users(self):
        return [user.username for user in self.users]

class Package:
    def __init__(self, username, email, phone_number, destination, package_details):
        self.username = username
        self.email = email
        self.phone_number = phone_number
        self.destination = destination
        self.package_details = package_details

class PackageManager:
    def __init__(self):
        self.packages_sold = []

    def sell_package(self, username, email, phone_number, destination, package_details):
        self.packages_sold.append(Package(username, email, phone_number, destination, package_details))

    def get_packages_sold(self):
        return self.packages_sold

def generate_receipt(package_details, user_info):
    receipt = "\n========== Payment Receipt ==========\n"
    receipt += f"Package Details:\n{package_details}\n\n"
    receipt += "User Information:\n"
    receipt += f"Name: {user_info['name']}\n"
    receipt += f"Address: {user_info['address']}\n"
    receipt += f"Email: {user_info['email']}\n"
    receipt += f"Phone Number: {user_info['phone']}\n"
    receipt += "====================================\n"
    return receipt

def display_popular_destinations():
    print("\nPopular Destinations:")
    print("1. Saint Martin Island")
    print("2. Sundarbans")
    print("3. Rangamati")
    print("4. Bandarban")
    print("5. Sajek")
    print("0. Back")

def display_student_offers():
    print("\nStudent Offers:")
    print("1. Saint Martin Island")
    print("2. Sundarbans")
    print("3. Rangamati")
    print("4. Bandarban")
    print("5. Sajek")
    print("0. Back")

def display_packages(destination):
    print(f"\nPackages for {destination}:")
    if destination == "Saint Martin Island":
        print("1. Family Package (3 days, 2 nights, includes all meals, double beds) - 5000 BDT (20% discount applied)")
        print("2. Single Package (2 days, 1 night, includes breakfast, single bed) - 3000 BDT")
        print("3. Double Package (4 days, 3 nights, includes all meals, twin beds) - 7000 BDT (10% discount applied)")
    elif destination == "Sundarbans":
        print("1. Group Package (3 days, 2 nights, includes all meals, multiple beds) - 4000 BDT")
        print("2. Eco Tour Package (2 days, 1 night, includes breakfast, single bed) - 2500 BDT")
    elif destination == "Rangamati":
        print("1. Adventure Package (3 days, 2 nights, includes all meals, double beds) - 4500 BDT (15% discount applied)")
        print("2. Nature Retreat Package (2 days, 1 night, includes breakfast, single bed) - 2800 BDT")
    elif destination == "Bandarban":
        print("1. Hilltop Camping Package (2 days, 1 night, includes all meals, tents) - 3500 BDT")
        print("2. Tribal Experience Package (3 days, 2 nights, includes breakfast, traditional huts) - 6000 BDT")
    elif destination == "Sajek":
        print("1. Hillside Resort Package (4 days, 3 nights, includes all meals, deluxe rooms) - 8000 BDT")
        print("2. Homestay Experience (2 days, 1 night, includes breakfast, local homestay) - 2000 BDT")
    print("0. Back")

def select_option():
    while True:
        choice = input("Enter the number of your chosen option: ")
        if choice.isdigit() and int(choice) >= 0:
            return choice
        else:
            print("Invalid choice. Please try again.")

def select_package():
    while True:
        package_choice = input("Enter the number of your chosen package: ")
        if package_choice.isdigit() and int(package_choice) in [1, 2, 3]:
            return int(package_choice)
        else:
            print("Invalid choice. Please try again.")

def collect_user_information():
    print("\nPlease enter your information:")
    name = input("Name: ")
    address = input("Address: ")
    email = input("Email: ")
    phone_number = input("Phone Number: ")
    return {"name": name, "address": address, "email": email, "phone": phone_number}

def process_payment():
    print("\nPayment Method :")
    print("Select Payment from the app.")
    print("Complete the payment on this Bkash Account : 01XXXXXXXX")
    transaction_id = "123456"
    return transaction_id

def verify_transaction(transaction_id):
    while True:
        confirmation_id = input("Please enter the transaction ID received: ")
        if confirmation_id == transaction_id:
            print("Transaction successful!")
            break
        else:
            print("Invalid transaction ID. Please try again.")

def main():
    print("==================Welcome to Travel Tribe==================")

    user_manager = UserManager()
    package_manager = PackageManager()

    while True:
        print("\n===============Select User Type===============")
        print("1. Admin\n2. User\n3. Exit")
        print("==============================================")
        user_type = input("Enter your choice: ")

        if user_type == '1':
            admin_password = input("Enter Admin Password: ")
            if admin_password == "adminpassword":
                print("Welcome, Admin!")

                while True:
                    print("\n===============Admin Panel===============")
                    print("1. View Users\n2. Search User\n3. View Packages Sold\n4. Log Out")
                    print("=========================================")
                    admin_choice = input("Enter your choice: ")

                    if admin_choice == '1':
                        users = user_manager.get_users()
                        print("List of Users:")
                        for user in users:
                            print(user)
                    elif admin_choice == '2':
                        username = input("Enter username to search: ")
                        if username in user_manager.get_users():
                            print(f"User '{username}' found.")
                        else:
                            print(f"User '{username}' not found.")
                    elif admin_choice == '3':
                        packages_sold = package_manager.get_packages_sold()
                        print("\nPackages Sold:")
                        for package in packages_sold:
                            print(f"Username: {package.username}, Email: {package.email}, Phone: {package.phone_number}, Destination: {package.destination}, Details: {package.package_details}")
                    elif admin_choice == '4':
                        print("Logging out Admin...")
                        break
                    else:
                        print("Invalid choice. Please try again.")

            else:
                print("Incorrect Admin Password. Please try again.")
        elif user_type == '2':
            print("You must create an account to use our services")
            logged_in_user = None

            while True:
                print("\n===============Sign up / Log in / Forgot Password===============")
                print("1. Login\n2. Create User\n3. Forgot Password\n4. Exit")
                print("===============================================================")
                choice = input("Enter your choice: ")

                if choice == '1':
                    username = input("Enter username: ")
                    password = input("Enter password: ")
                    user = user_manager.login(username, password)
                    if user:
                        logged_in_user = username
                        while True:
                            print("\nSelect an option:")
                            print("1. Popular Destinations")
                            print("2. Student Offers")
                            print("3. Log Out")
                            option = select_option()

                            if option == '1':
                                while True:
                                    display_popular_destinations()
                                    destination_choice = input("Enter the number of your chosen destination: ")
                                    if destination_choice == '0':
                                        break
                                    elif destination_choice in ['1', '2', '3', '4', '5']:
                                        destination_name = ""
                                        if destination_choice == '1':
                                            destination_name = "Saint Martin Island"
                                        elif destination_choice == '2':
                                            destination_name = "Sundarbans"
                                        elif destination_choice == '3':
                                            destination_name = "Rangamati"
                                        elif destination_choice == '4':
                                            destination_name = "Bandarban"
                                        elif destination_choice == '5':
                                            destination_name = "Sajek"

                                        display_packages(destination_name)
                                        package_choice = select_package()
                                        if package_choice in [1, 2, 3]:
                                            user_info = collect_user_information()
                                            package_details = ""
                                            if package_choice == 1:
                                                package_details = "Family Package (3 days, 2 nights, includes all meals, double beds) - 5000 BDT"
                                            elif package_choice == 2:
                                                package_details = "Single Package (2 days, 1 night, includes breakfast, single bed) - 3000 BDT"
                                            elif package_choice == 3:
                                                package_details = "Double Package (4 days, 3 nights, includes all meals, twin beds) - 7000 BDT"

                                            package_manager.sell_package(username, user_info['email'], user_info['phone'], destination_name, package_details)

                                            receipt = generate_receipt(package_details, user_info)
                                            print(receipt)
                                            transaction_id = process_payment()
                                            verify_transaction(transaction_id)
                                    else:
                                        print("Invalid choice. Please try again.")
                            elif option == '2':
                                while True:
                                    display_student_offers()
                                    destination_choice = input("Enter the number of your chosen destination: ")
                                    if destination_choice == '0':
                                        break
                                    elif destination_choice in ['1', '2', '3', '4', '5']:
                                        destination_name = ""
                                        if destination_choice == '1':
                                            destination_name = "Saint Martin Island"
                                        elif destination_choice == '2':
                                            destination_name = "Sundarbans"
                                        elif destination_choice == '3':
                                            destination_name = "Rangamati"
                                        elif destination_choice == '4':
                                            destination_name = "Bandarban"
                                        elif destination_choice == '5':
                                            destination_name = "Sajek"

                                        display_packages(destination_name)
                                        package_choice = select_package()
                                        if package_choice in [1, 2, 3]:
                                            user_info = collect_user_information()
                                            package_details = ""
                                            if package_choice == 1:
                                                package_details = "Family Package (3 days, 2 nights, includes all meals, double beds) - 5000 BDT"
                                            elif package_choice == 2:
                                                package_details = "Single Package (2 days, 1 night, includes breakfast, single bed) - 3000 BDT"
                                            elif package_choice == 3:
                                                package_details = "Double Package (4 days, 3 nights, includes all meals, twin beds) - 7000 BDT"

                                            package_manager.sell_package(username, user_info['email'], user_info['phone'], destination_name, package_details)

                                            receipt = generate_receipt(package_details, user_info)
                                            print(receipt)
                                            transaction_id = process_payment()
                                            verify_transaction(transaction_id)
                                    else:
                                        print("Invalid choice. Please try again.")
                            elif option == '3':
                                print(f"Logging out {logged_in_user}...")
                                logged_in_user = None
                                break
                            else:
                                print("Invalid choice. Please try again.")

                elif choice == '2':
                    username = input("Enter username: ")
                    password = input("Enter password: ")
                    user_manager.create_user(username, password)
                elif choice == '3':
                    username = input("Enter username: ")
                    user_manager.forgot_password(username)
                elif choice == '4':
                    print("Exiting...")
                    break
                else:
                    print("Invalid choice. Please try again.")
        elif user_type == '3':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  const saveCode = () => {
    const blob = new Blob([codeString], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'travel-tribe.py';
    link.click();
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Python Code',
        text: 'Check out this Python code!',
        url: window.location.href, // Share the current page URL
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      const encodedCode = encodeURIComponent(codeString);
      const shareUrl = `https://your-sharing-service.com?code=${encodedCode}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="container mx-auto mb-10">
      <motion.div
        className="code-block-container bg-gray-800 text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <pre>
          <code className="language-python">{codeString}</code>
        </pre>
        {loading && <p className="text-gray-400">Running code...</p>}
        {output && <pre className="output">{output}</pre>}
        {error && <pre className="error">{error}</pre>}
      </motion.div>

      {/* Features List */}
      <motion.div
        className="features-list border-t border-gray-600 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <motion.button
            onClick={copyToClipboard}
            className="border border-green-500 bg-transparent text-green-500 p-2 rounded-lg flex items-center space-x-2 hover:bg-green-500 hover:text-white mr-2"
           
          >
            <FaRegCopy />
            <span className={`text-sm ${copied ? 'text-green-300' : ''}`}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </motion.button>
          <motion.button
            onClick={saveCode}
            className="border border-green-500 bg-transparent text-green-500 p-2 rounded-lg flex items-center space-x-2 hover:bg-green-500 hover:text-white mr-2"
           
          >
            <FaSave />
            <span className="text-sm">Save</span>
          </motion.button>
          <motion.button
            onClick={shareCode}
            className="border border-green-500 bg-transparent text-green-500 p-2 rounded-lg flex items-center space-x-2 hover:bg-green-500 hover:text-white"
           
          >
            <FaShareAlt />
            <span className="text-sm">Share</span>
          </motion.button>
        </div>
        <h2 className="text-lg font-semibold text-green-500 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li className="mb-2">Copy code to clipboard</li>
          <li className="mb-2">Save code as a file</li>
          <li className="mb-2">Share code via social media and other platforms</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default PythonCodeBlock;
